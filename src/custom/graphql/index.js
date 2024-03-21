import { setContext } from '@apollo/client/link/context'
import {
    getLanguage,
    getLocalAccessToken,
    getLocalOauth2Token
} from '../axios/normal'
import {
    ApolloClient,
    from,
    HttpLink,
    InMemoryCache,
    Observable
} from '@apollo/client'
import { BASE_PATH } from '../axios/config/Url'
import { onError } from '@apollo/client/link/error'
import { message as messageAlert } from 'antd'
import { updateLocalAccessToken } from '../axios'
import { refreshToken } from '../../api/login/api'
import { t } from 'i18next'

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            'dogoo-x-user-context-request': getLocalAccessToken(),
            authorization: getLocalOauth2Token(),
            'Accept-Language': getLanguage()
        }
    }
})

const refreshTokenAuth = async () => {
    try {
        const response = await refreshToken()
        const { accessToken } = response.data
        updateLocalAccessToken(accessToken)
        // const re = await getToken();
        // updateLocalOauth2Token(re.data);

        return accessToken
    } catch (err) {
        throw err
    }
}

const httpLink = new HttpLink({ uri: `${BASE_PATH}/graphql` })

function retryAccessToken(operation, forward) {
    return new Observable((observer) => {
        refreshTokenAuth()
            .then((refreshResponse) => {
                operation.setContext(({ headers = {} }) => ({
                    headers: {
                        // Re-add old headers
                        ...headers,
                        'dogoo-x-user-context-request': getLocalAccessToken(),
                        authorization: `${getLocalOauth2Token()}` || null,
                        'Accept-Language': getLanguage()
                    }
                }))
            })
            .then(() => {
                const subscriber = {
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer)
                }

                // Retry last failed request
                forward(operation).subscribe(subscriber)
            })
            .catch((error) => {
                // No refresh or client token available, we force user to login
                observer.error(error)
            })
    })
}

function errorLink() {
    return onError(({ graphQLErrors, networkError, operation, forward }) => {
        if (networkError) {
            if (typeof window !== 'undefined' && !window.navigator.onLine) {
                messageAlert
                    .error('Sorry, your browser is offline.')
                    .then((r) => {})
            } else {
                return retryAccessToken(operation, forward)
            }
        }
        if (graphQLErrors) {
            for (let err of graphQLErrors) {
                if (
                    err?.extensions?.code === 'Internal Server Error' &&
                    !err?.message.includes('com.dogoo')
                ) {
                    messageAlert.error(t('notification.500'))
                } else if (err?.extensions?.exception?.errno === 404) {
                    messageAlert.error(t('notification.404'))
                } else {
                    graphQLErrors.forEach(({ message, locations, path }) =>
                        messageAlert.error(
                            `${
                                message && message.split(':').length > 0
                                    ? message.split(':')[
                                          message.split(':').length - 1
                                      ]
                                    : message
                            }`
                        )
                    )

                    switch (err.extensions.code) {
                        case 'UNAUTHENTICATED' || '401' || '403':
                            return retryAccessToken(operation, forward)
                        default:
                            break
                    }
                }
            }
        }
    })
}

export const client = new ApolloClient({
    link: from([errorLink(), authLink, httpLink]),
    cache: new InMemoryCache()
    // defaultOptions: defaultOptions,
})

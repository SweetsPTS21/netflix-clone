import { setContext } from '@apollo/client/link/context'
import { getLanguage, getLocalJwtToken, updateLocalJwtToken } from '../axios'
import {
    ApolloClient,
    createHttpLink,
    from,
    HttpLink,
    InMemoryCache,
    Observable
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { message } from 'antd'
import { refreshToken } from '../../api/common/login/api'
import { t } from 'i18next'
import { clearLocalData } from '../../utils/localDataUtils'

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            'Content-Type': 'application/json',
            authorization: getLocalJwtToken(),
            'Accept-Language': getLanguage()
        }
    }
})

const refreshTokenAuth = async () => {
    try {
        const response = await refreshToken()
        const { accessToken } = response.data
        updateLocalJwtToken(accessToken)

        return accessToken
    } catch (err) {
        throw err
    }
}

const httpLink = new HttpLink({
    uri: `http://localhost:8080/graphql`
})

function retryAccessToken(operation, forward) {
    return new Observable((observer) => {
        refreshTokenAuth()
            .then((refreshResponse) => {
                operation.setContext(({ headers = {} }) => ({
                    headers: {
                        // Re-add old headers
                        ...headers,
                        authorization: `${getLocalJwtToken()}` || null,
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
                // No refresh or client token available, force user to login
                message.error(t('notification.401'))
                observer.error(error)

                // Clear local storage, cookies and redirect to login
                clearLocalData()
            })
    })
}

function errorLink() {
    return onError(({ graphQLErrors, networkError, operation, forward }) => {
        if (networkError) {
            if (typeof window !== 'undefined' && !window.navigator.onLine) {
                message.error('Sorry, your browser is offline.').then((r) => {})
            } else {
                return retryAccessToken(operation, forward)
            }
        }
        if (graphQLErrors) {
            for (let err of graphQLErrors) {
                if (err?.extensions?.code === 'Internal Server Error') {
                    message.error(t('notification.500'))
                } else if (err?.extensions?.exception?.errno === 404) {
                    message.error(t('notification.404'))
                } else {
                    graphQLErrors.forEach(({ error, locations, path }) => {
                        message.error(
                            `${
                                error && error.split(':').length > 0
                                    ? error.split(':')[
                                          error.split(':').length - 1
                                      ]
                                    : error
                            }`
                        )
                        console.log(
                            `[GraphQL error]: Message: ${error}, Location: ${locations}, Path: ${path}`
                        )
                    })

                    switch (err.extensions.code) {
                        case 'UNAUTHENTICATED':
                        case '401':
                        case '403':
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
})

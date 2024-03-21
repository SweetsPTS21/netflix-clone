import {
    DG_axios as axiosInstance,
    getLanguage,
    getLocalAccessToken,
    getLocalOauth2Token,
    updateLocalAccessToken
} from '../index'
import { message } from 'antd'
import { refreshToken } from '../../../api/login/api'
import { Translation } from 'react-i18next'
import { onReloadData } from '../../../redux/actions/layout/interaction/action'
import { logoutStart } from '../../../redux/actions/login/actions'
import { t } from 'i18next'

const setup = (store) => {
    axiosInstance.interceptors.request.use(
        (config) => {
            const oauth2Token = getLocalOauth2Token()
            const accessToken = getLocalAccessToken()
            const language = getLanguage()

            config.headers['Authorization'] = oauth2Token
            config.headers['dogoo-x-user-context-request'] = accessToken
            config.headers['Accept-Language'] = language
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    function showMessageSuccess(config) {
        if (config.method === 'put' || config.method === 'patch') {
            message.success(
                <Translation>
                    {(t, { i18n }) => <span>{t('common.message.update')}</span>}
                </Translation>
            )
        }
        if (config.method === 'post') {
            console.log(config.url)
            if (
                !config.url.includes('/oauth2/token') &&
                !config.url.includes('/signin') &&
                !config.url.includes('/logout') &&
                !config.url.includes('/refreshtoken')
            )
                message.success(
                    <Translation>
                        {(t, { i18n }) => (
                            <span>{t('common.message.add')}</span>
                        )}
                    </Translation>
                )
            if (config.url.includes('/signin')) {
                message.success('Welcome')
            }
        }
        if (config.method === 'delete') {
            message.success(
                <Translation>
                    {(t, { i18n }) => <span>{t('common.message.delete')}</span>}
                </Translation>
            )
        }
    }

    axiosInstance.interceptors.response.use(
        (res) => {
            const config = res.config

            showMessageSuccess(config)
            if (config.method !== 'get') {
                store.dispatch(onReloadData(config.baseURL + config.url))
            }
            return res
        },
        async (err) => {
            const originalConfig = err.config

            const response = err.response

            const data = response?.data
            const status = response?.status
            if (status === 404) {
                message.error(t('notification.404'))
            } else if (data?.status === 'INTERNAL_SERVER_ERROR') {
                message.error(t('notification.500'))
            } else {
                const detail =
                    data?.detail ||
                    data?.message ||
                    data?.title ||
                    data?.status ||
                    t('notification.500')

                if (
                    detail !== 'username.context.is.required' &&
                    detail &&
                    status !== 403 &&
                    status !== 404
                ) {
                    switch (status) {
                        case 500:
                            message.error(detail)
                            break
                        default:
                            message.warning(detail)
                    }
                }
            }

            if (!originalConfig.url.includes('/login-rest/v2.0/signin')) {
                // Access Token was expired
                if (status === 401 && !originalConfig._retry) {
                    originalConfig._retry = true
                    try {
                        const rs = await refreshToken()
                        const { accessToken } = rs.data
                        updateLocalAccessToken(accessToken)
                        return axiosInstance(originalConfig)
                    } catch (_error) {
                        store.dispatch(logoutStart())
                        return Promise.reject(_error)
                    }
                }
            }

            if (status === 403 && !originalConfig._retry) {
                store.dispatch(logoutStart())
            }

            return Promise.reject(err)
        }
    )
}
export default setup

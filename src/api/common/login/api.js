import { BASE_PATH } from '../../../custom/axios/config/Url'
import { getLocalJwtToken, Netlfiz_axios } from '../../../custom/axios'

const BASE_URL_LOGIN = `${BASE_PATH}/api/v1/auth/authenticate`
const BASE_URL_TOKEN = `${BASE_PATH}/api/v1/auth/token`
const BASE_URL_ME = `${BASE_PATH}/api/v1/auth/me`
const BASE_URL_REFRESH_TOKEN = `${BASE_PATH}/api/v1/auth/refresh-token`
const BASE_URL_LOG_OUT = `${BASE_PATH}/api/v1/auth/logout`

function setLanguage() {
    localStorage.setItem('language', 'vi')
}

export const signIn = (email, password, rememberMe) => {
    setLanguage()
    const language = localStorage.getItem('language')
    return Netlfiz_axios.post(
        BASE_URL_LOGIN,
        {
            email,
            password,
            rememberMe
        },
        {
            headers: {
                'Accept-language': `${language}`
            },
            withCredentials: true
        }
    )
}

export const getToken = (email) => {
    return Netlfiz_axios.post(
        BASE_URL_TOKEN,
        {
            email
        },
        {
            headers: {
                Accept: 'application/json'
            }
        }
    )
}

export const getMe = () => {
    return Netlfiz_axios.get(BASE_URL_ME, {
        withCredentials: true
    })
}

export const refreshToken = (refreshtoken) => {
    return Netlfiz_axios.post(
        BASE_URL_REFRESH_TOKEN,
        {
            refreshTokenCode: refreshtoken
        },
        {
            withCredentials: true
        }
    )
}

export const logout = () => {
    return Netlfiz_axios.post(
        BASE_URL_LOG_OUT,
        {},
        {
            withCredentials: true
        }
    )
}

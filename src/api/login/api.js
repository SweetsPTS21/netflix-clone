import { BASE_PATH } from '../../custom/axios/config/Url'
import { Netlfiz_axios } from '../../custom/axios'

const BASE_URL_LOGIN = `${BASE_PATH}/auth/authenticate`
const BASE_URL_TOKEN = `${BASE_PATH}/auth/token`
const BASE_URL_REFRESH_TOKEN = `${BASE_PATH}/login-rest/v2.0/refreshtoken`
const BASE_URL_LOG_OUT = `${BASE_PATH}/login-rest/v2.0/logout`

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

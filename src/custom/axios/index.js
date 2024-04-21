import axios from 'axios'
import { BASE_DOMAIN, BASE_PATH } from '../../config/Url'
import Cookies from 'js-cookie'

export const getLocalJwtToken = () => {
    const jwtToken = Cookies.get('accessToken')
    return `Bearer ${jwtToken}`
}

export const Netlfiz_axios = axios.create({
    baseURL: `${BASE_PATH}/api/v1`,
    headers: {
        'Content-Type': 'application/json',
        Authorization: getLocalJwtToken()
    }
})

export const updateLocalJwtToken = (accessToken) => {
    Cookies.set('accessToken', accessToken, {
        expires: 30,
        domain: BASE_DOMAIN
    })
}

export const updateLocalOauth2Token = (oauth2Token) => {
    localStorage.setItem('oauth2Token', JSON.stringify(oauth2Token))
}

export const getLanguage = () => {
    return localStorage.getItem('language') || 'vi'
}

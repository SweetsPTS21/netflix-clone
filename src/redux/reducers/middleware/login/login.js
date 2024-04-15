import { call, fork, put, takeEvery } from '@redux-saga/core/effects'
import { getToken, logout, signIn } from '../../../../api/login/api'
import {
    getTokenSuccess,
    loginError,
    loginSuccess
} from '../../../actions/login/actions'
import { loginTypes } from '../../../actions/login/types'
import { message } from 'antd'
import Cookies from 'js-cookie'
import { BASE_DOMAIN, BASE_HOME } from '../../../../custom/axios/config/Url'

function* onLoginStartAsync(action) {
    try {
        const { email, password, rememberMe } = action
        const responseOauth2 = yield call(getToken, email)

        if (responseOauth2.status === 200) {
            yield put(getTokenSuccess(responseOauth2.data))
            localStorage.setItem(
                'oauth2Token',
                JSON.stringify(responseOauth2.data)
            )
        }

        const response = yield call(signIn, email, password, rememberMe)
        if (response.status === 200) {
            Cookies.set('accessToken', response.data.accessToken, {
                expires: 2592
            })
            Cookies.set('refreshToken', response.data.refreshToken, {
                expires: 2592
            })
            yield put(loginSuccess())
        }
    } catch (error) {
        yield put(loginError(error?.message))
        message.error('Sai tên người dùng hoặc mật khẩu. Vui lòng thử lại!')
    }
}

function* onLogin() {
    yield takeEvery(loginTypes.REQUEST, onLoginStartAsync)
}

function* onLogoutStartAsync() {
    try {
        yield call(logout)
    } finally {
        Cookies.remove('accessToken')
        Cookies.remove('refreshToken')
        window.localStorage.clear()
        const pathname = encodeURIComponent(`${document.location.href}`)
        window.location.href = `${BASE_HOME}login?redirect=${pathname.replaceAll('403', '')}`
    }
}

function* onLogout() {
    yield takeEvery(loginTypes.LOGOUT, onLogoutStartAsync)
}

const login = [fork(onLogin), fork(onLogout)]

export default login

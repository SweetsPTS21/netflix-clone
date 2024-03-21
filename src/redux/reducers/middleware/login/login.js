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
        const { username, password, rememberMe } = action

        const responseOauth2 = yield call(getToken)

        if (responseOauth2.status === 200) {
            yield put(getTokenSuccess(responseOauth2.data))
            localStorage.setItem(
                'oauth2Token',
                JSON.stringify(responseOauth2.data)
            )
        }

        const response = yield call(signIn, username, password, rememberMe)
        if (response.status === 200) {
            Cookies.set('accessToken', response.data.accessToken, {
                expires: 2592
            })

            const newOauth2 = yield call(getToken)
            if (responseOauth2.status === 200) {
                yield put(getTokenSuccess(newOauth2.data))
                localStorage.setItem(
                    'oauth2Token',
                    JSON.stringify(newOauth2.data)
                )
            }
            yield put(loginSuccess())
        }
    } catch (error) {
        yield put(loginError(error?.response?.data))
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
        Cookies.remove('accessToken', { domain: BASE_DOMAIN })
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

import { call, fork, put, takeEvery } from '@redux-saga/core/effects'
import { getMe, logout, signIn } from '../../../../api/common/login/api'
import {
    clearLogin,
    loginError,
    loginSuccess
} from '../../../actions/login/actions'
import { loginTypes } from '../../../actions/login/Types'
import { message } from 'antd'
import Cookies from 'js-cookie'
import { BASE_HOME } from '../../../../custom/axios/config/Url'
import { clearLocalData } from '../../../../utils/localDataUtils'

function* onLoginStartAsync(action) {
    try {
        const { email, password, rememberMe } = action
        const response = yield call(signIn, email, password, rememberMe)

        if (response.status === 200) {
            Cookies.set('accessToken', response.data.accessToken, {
                expires: 2592
            })
            Cookies.set('refreshToken', response.data.refreshToken, {
                expires: 2592
            })

            localStorage.setItem('jwtToken', JSON.stringify(response.data))

            const me = yield call(getMe)
            if (me.status === 200) {
                yield put(loginSuccess(me.data))
            }
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
        const response = yield call(logout)

        if (response.status === 200) {
            clearLocalData()

            yield put(clearLogin())

            window.location.href = `${BASE_HOME}/login`
        }
    } catch (error) {
        message.error('Đã có lỗi xảy ra. Vui lòng thử lại!')
    }
}

function* onLogout() {
    yield takeEvery(loginTypes.LOGOUT, onLogoutStartAsync)
}

const login = [fork(onLogin), fork(onLogout)]

export default login

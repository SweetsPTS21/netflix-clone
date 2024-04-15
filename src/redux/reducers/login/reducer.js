import { loginTypes } from './Types'

const initialState = {
    loading: false,
    user: null,
    token: null,
    email: '',
    password: '',
    rememberMe: false,
    loginSuccess: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginTypes.REQUEST:
            return {
                ...state,
                email: action.email,
                password: action.password,
                rememberMe: action.rememberMe,
                loginSuccess: action.loggedInSuccess
            }
        case loginTypes.SUCCESS:
            return {
                ...state,
                loading: false,
                loginSuccess: action.loggedInSuccess
            }
        case loginTypes.FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case loginTypes.LOGOUT:
            return {
                ...state,
                user: null
            }
        case loginTypes.GET_TOKEN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case loginTypes.GET_TOKEN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload
            }
        case loginTypes.GET_TOKEN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case loginTypes.UPDATE_USERNAME_PASSWORD:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password
            }
        case loginTypes.LOADING_LOGIN:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default loginReducer

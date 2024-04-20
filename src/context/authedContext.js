import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearLogin, getTokenStart } from '../redux/actions/login/actions'
import Cookies from 'js-cookie'

const AuthedContext = createContext({})

export const useAuthedContext = () => {
    return useContext(AuthedContext)
}

const AuthedContextProvider = ({ children }) => {
    const dispatch = useDispatch()
    const [authedUser, setAuthedUser] = useState(null)
    const [authedLogin, setAuthedLogin] = useState(false)
    const { email, loginSuccess, user } = useSelector(
        (state) => state.loginReducer
    )

    useEffect(() => {
        if (loginSuccess && email) {
            const token = localStorage.getItem('jwtToken')
            const cookieToken = Cookies.get('accessToken')

            if (!token && !cookieToken) {
                dispatch(getTokenStart(email))
            } else if (cookieToken) {
                setAuthedLogin(true)
                setAuthedUser(user)
            } else {
                dispatch(clearLogin())
            }
        }
    }, [loginSuccess])

    const contextValue = useMemo(() => {
        return {
            authedUser,
            authedLogin
        }
    }, [authedUser, authedLogin])

    return (
        <AuthedContext.Provider value={contextValue}>
            {children}
        </AuthedContext.Provider>
    )
}

export default AuthedContextProvider

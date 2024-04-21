import { Netlfiz_axios } from '../../../custom/axios'
import { BASE_PATH } from '../../../config/Url'

const BASE_URL_SIGNUP = `${BASE_PATH}/api/v1/auth/register`

export const signUp = (firstName, lastName, email, password) => {
    return Netlfiz_axios.post(
        BASE_URL_SIGNUP,
        {
            firstName,
            lastName,
            email,
            password
        },
        {
            withCredentials: true
        }
    )
}

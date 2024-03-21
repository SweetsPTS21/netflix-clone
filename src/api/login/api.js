import {BASE_PATH} from "../../custom/axios/config/Url";
import {DG_axiosNormal} from "../../custom/axios/normal";
import {DG_axios} from "../../custom/axios";

const BASE_URL_LOGIN = `${BASE_PATH}/login-rest/v2.0/signin`;
const BASE_URL_TOKEN = `${BASE_PATH}/oauth2/token`;
const BASE_URL_REFRESH_TOKEN = `${BASE_PATH}/login-rest/v2.0/refreshtoken`;
const BASE_URL_LOG_OUT = `${BASE_PATH}/login-rest/v2.0/logout`;
const BASE_PATH_CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const BASE_PATH_CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

function setLanguage() {
    localStorage.setItem("language", "vi")
}

export const signIn = (username, password, rememberMe) => {

    setLanguage()
    const language = localStorage.getItem("language")
    return DG_axios.post(
        BASE_URL_LOGIN,
        {
            username,
            password,
            rememberMe
        },
        {
            headers: {
                "Accept-language": `${language}`
            },
            withCredentials: true,
        }
    );
};

export const getToken = () => {
    return DG_axios.post(
        BASE_URL_TOKEN,
        {},
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            params: {
                'grant_type': 'client_credentials',
                'client_id': BASE_PATH_CLIENT_ID,
                'client_secret': BASE_PATH_CLIENT_SECRET
            }
        }
    );
};

export const refreshToken = (refreshtoken) => {
    return DG_axiosNormal.post(
        BASE_URL_REFRESH_TOKEN,
        {
            refreshTokenCode: refreshtoken,
        },
        {
            withCredentials: true
        }
    );
};

export const logout = () => {
    return DG_axiosNormal.post(
        BASE_URL_LOG_OUT,
        {},
        {
            withCredentials: true
        }
    );
}

import axios from "axios";
import {BASE_DOMAIN, BASE_PATH} from "./config/Url";
import Cookies from "js-cookie";
import {getToken, refreshToken} from "../../api/login/api";


export const DG_axios = axios.create({
    baseURL: `${BASE_PATH}`,
    headers: {
        "Content-Type": "application/json"
    }
});

export const getLocalOauth2Token = () => {
    const oauth2Token = Cookies.get("oauth2Token");
    return `Bearer ${oauth2Token}`;
}

export const getLocalAccessToken = () => {
    return Cookies.get("accessToken");
}

export const updateLocalAccessToken = (accessToken) => {
    Cookies.set("accessToken", accessToken, {expires: 30, domain: BASE_DOMAIN});
}

export const updateLocalOauth2Token = (oauth2Token) => {
    localStorage.setItem("oauth2Token", JSON.stringify(oauth2Token));
}

export const getLanguage = () => {
    return localStorage.getItem("language") || "vi"
}

export const refreshAccessToken = async () => {
    await refreshToken().then(r => {

        updateLocalAccessToken(r.data.accessToken)
    })
}

export const refreshOauth2Token = async () => {

    await getToken().then(r => {
        updateLocalOauth2Token(r.data)
    })
}



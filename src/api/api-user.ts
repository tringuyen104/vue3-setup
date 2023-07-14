import API_CONST from "../const/API_CONST";
import callApi from "./api";

const url = 'api/user/';
const urlLogin = `${url}login/`;

export const loginWithOAuth2 = (method: string) => {
    return callApi({
        url: urlLogin + 'oAuth',
        method: API_CONST.POST,
        data: {
            method
        }
    })
}
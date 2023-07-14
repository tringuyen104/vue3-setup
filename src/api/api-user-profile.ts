import API_CONST from "../const/API_CONST";
import callApi from "./api";

const url = 'api/v1/user-profile/';

export const getUserProfileById = (userId)=>{
    return callApi({
        url: url + userId,
        method: API_CONST.GET
    })
}
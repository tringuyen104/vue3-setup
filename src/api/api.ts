import axios from 'axios';
const baseURL: string = import.meta.env.VITE_BASE_URL?.toString() || ''
const callApi = (request) => {
    if (!request) return;
    let config = {
        method: request.method,
        url: `${baseURL}${request.url}`,
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CSRF-Token",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
        }
    }
    if(request.data){
        config['data'] = request.data;
    }

    return axios(config)
}

export default callApi;
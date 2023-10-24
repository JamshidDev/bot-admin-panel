import axios from 'axios';

import router from '../router/index';

const instance = axios.create({
    // baseURL: `http://exodim.itdevs.uz`
    baseURL: 'http://54.236.251.172:5000'
});

instance.interceptors.request.use(function (config) {
    let token = sessionStorage.getItem('access_token') ? sessionStorage.getItem('access_token') : null;
    if (token) {
        config.headers['Access-Control-Allow-Origin'] = '*'
        config.headers['Authorization'] = 'Bearer ' + token
    }

    return config;
})

instance.interceptors.response.use(
    response => response,
    error => {
      
        if(error.response?.status==401){
            router.push("/login")
        }
        if(error.response.data?.message){
            Notify({
                type: "error",
                title: "Xatolik",
                text: error.response.data.message,
            });
    
        }
       
        return Promise.reject(error)
    }
);

export default instance
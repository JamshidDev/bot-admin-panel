import axios from "../index";

// lodin admin request
const login_user = (payload)=>{
    return axios.post(`/login`, payload.data)
}




export default {login_user}
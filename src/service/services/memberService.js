import axios from "../index";


const get_users = (payload)=>{
    return axios.get(`/user/all`,  {params:payload})
}






export default {
    get_users
}
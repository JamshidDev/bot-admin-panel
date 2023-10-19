import axios from "../index";


const get_categories = (payload)=>{
    return axios.get(`/service/category/all`,  {params:payload})
}

const create_category = (payload)=>{
    return axios.post(`/service/category/create`, payload.data)
}


const update_category = (payload)=>{
    return axios.put(`/service/category/update/${payload.category_id}`, payload.data)
}


const delete_category = (payload)=>{
    return axios.delete(`/service/category/delete/${payload.category_id}`)
}





export default {get_categories,create_category, update_category,delete_category}
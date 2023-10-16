import axios from "../index";


const get_banks = (payload)=>{
    return axios.get(`/bank`,  {params:payload})
}

const create_banks = (payload)=>{
    return axios.post(`/bank/create`, payload.data)
}


const update_banks = (payload)=>{
    return axios.put(`/bank/update/${payload.bank_id}`, payload.data)
}


const delete_banks = (payload)=>{
    return axios.delete(`/bank/delete/${payload.bank_id}`)
}





export default {get_banks,create_banks, update_banks,delete_banks}
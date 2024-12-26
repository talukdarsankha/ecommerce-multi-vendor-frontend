import axios from "axios";


// const BASE_URL = "http://localhost:8080/";

const BASE_URL = "https://ecomm-multi-vendor-backend-production.up.railway.app/";


export const api = axios.create({
    baseURL:BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
})


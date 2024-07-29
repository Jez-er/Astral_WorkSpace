import axios, { AxiosInstance } from "axios"

export const Auth_URL: string | undefined = import.meta.env.VITE_API_URL
console.log(Auth_URL)

export const api: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: Auth_URL,
})

api.interceptors.request.use((config)=> {
    config.headers.Authorization = `Bearer ${localStorage.getItem('session')}`
    config.headers["Content-Type"] = 'application/json'
    return config
})
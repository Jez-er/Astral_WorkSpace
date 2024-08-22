import axios, { AxiosInstance } from 'axios'

export const BASE_URL: string | undefined = import.meta.env.VITE_API_URL
console.log(BASE_URL)

export const api: AxiosInstance = axios.create({
	withCredentials: true,
	baseURL: BASE_URL,
})

api.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('session')}`
	config.headers['Content-Type'] = 'application/json'
	return config
})

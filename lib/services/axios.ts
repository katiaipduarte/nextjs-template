import axios, { type AxiosInstance } from 'axios'

import { env } from '@/env.mjs'

const axiosInstance: AxiosInstance = axios.create({
	baseURL: env.NEXT_PUBLIC_API_BASE_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
		apikey: env.NEXT_PUBLIC_API_ENDPOINT,
	},
})

export default axiosInstance

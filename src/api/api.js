import axios from 'axios'

const baseURL = 'https://backend.kadnya.com/api/'
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  config => {
    const token = 'c80de43bb4cca36e14a3e63556845960523b04c0'

    if (token) {
      config.headers.Authorization = `Token ${token}`
    }

    return config
  },
  error => Promise.reject(error),
)

export default api

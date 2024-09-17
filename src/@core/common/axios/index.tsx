import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://14.225.207.183:8082/api',
  withCredentials: false
})

// Add a request interceptor for authentication
axiosInstance.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('csrfToken')

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Add a response interceptor for handling errors
axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      if (error.response.status === 401 && !error?.response?.headers['service-name']) {
      } else if (error.response.status === 500) {
      } else if (error.response.status === 404) {
        // window.location.href = '/404'
      }
    }

    return Promise.reject(error)
  }
)

export default axiosInstance

// Packages
import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.AUTHENTICATION_SERVICE,
  headers: { Accept: 'application/json' }
})

api.interceptors.response.use(
  response => {
    if (response.data) {
      return response.data
    }

    return response
  },
  error => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data.error)
    }

    return Promise.reject(error)
  }
)

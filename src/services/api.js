import axios from 'axios'

const api = axios.create({
  // baseURL: 'https://omnistackw6-backend.herokuapp.com/'
  baseURL: 'https://omnistack-backend.herokuapp.com/'
})

export default api
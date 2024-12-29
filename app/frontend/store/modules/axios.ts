import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3002/' // Adjust this to match your backend server URL
})

export default instance
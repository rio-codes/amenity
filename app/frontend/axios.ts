import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3002/api/v1' // Adjust this to match your backend server URL and port
})

export default instance
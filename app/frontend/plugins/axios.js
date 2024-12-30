import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3002/api/v1' // Adjust this to match your backend server URL and port

// Optionally, set default headers if needed
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios
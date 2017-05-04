import axios from 'axios'

export default axios.create({
  baseURL: 'http://mrdoggy.ppbox.us/',
  timeout: 5000,
  headers: {
    'Bearer': localStorage.token,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

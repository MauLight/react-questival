import axios from 'axios'
const baseUrl = 'https://questivalapp-backend.onrender.com/api/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }
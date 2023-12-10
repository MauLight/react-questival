import axios from 'axios'
const baseUrl = 'https://questivalapp-backend.onrender.com/api/users'

export const getUser = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}`)
  return data
}
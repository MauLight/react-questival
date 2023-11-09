import axios from 'axios'
const baseUrl = '/api/users'

export const getUser = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}`)
  return data
}
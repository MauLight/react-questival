import axios from 'axios'

const baseUrl = 'https://questivalapp-backend.onrender.com/api/lessons'

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log(response.data)
  return response.data
}
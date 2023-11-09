import axios from 'axios'

const baseUrl = '/api/lessons'

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log(response.data)
  return response.data
}
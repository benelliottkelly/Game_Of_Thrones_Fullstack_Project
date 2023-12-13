import { formToObj, getToken } from '../helpers/common'
import axios from 'axios'

export async function updateUserImage(request, id) {
  const data = await request
  return await axios.put(`/api/users/${id}`, data, {
      validateStatus: () => true,
      headers: {
          Authorization: `Bearer ${getToken()}`
      }
  })

  
}
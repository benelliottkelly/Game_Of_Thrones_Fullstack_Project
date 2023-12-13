import axios from 'axios'
import { formToObj, getToken } from '../helpers/common'
import { redirect } from 'react-router-dom'

export async function createCharacter(request) {
    const data = await formToObj(request)
    return await axios.post(`/api/characters`, data, {
        validateStatus: () => true,
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    })
}

export async function updateCharacter(request, id) {
    const data = await formToObj(request)
    return await axios.put(`/api/characters/${id}`, data, {
        validateStatus: () => true,
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    })

    
}

export async function deleteCharacter(id) {
    const response = await axios.delete(`/api/characters/${id}`, {
        validateStatus: () => true,
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    })
    return response
}

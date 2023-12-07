import axios from "axios"

export async function characterLoader() {
    const { data } = await axios.get(`/api/characters`)
    return { data }.json()
}

export async function houseLoader() {
    const { data } = await axios.get(`/api/houses`)
    return { data }.json()
}

export async function placeLoader() {
    const { data } = await axios.get(`/api/places`)
    return { data }.json()
}

export async function singleCharacterLoader(characterId) {
    const { data } = await axios.get(`/api/characters/${characterId}`)
    return { data }.json()
}

export async function singleHouseLoader(houseId) {
    const { data } = await axios.get(`/api/houses/${houseId}`)
    return { data }.json()
}

export async function singlePlaceLoader(placeId) {
    const { data } = await axios.get(`/api/places/${placeId}`)
    return { data }.json()
}
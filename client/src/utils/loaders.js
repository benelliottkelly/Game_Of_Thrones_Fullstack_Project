export async function characterLoader() {
    const res = await fetch(`https://localhost:3000/api/characters`)
    return res.json()
}

export async function houseLoader() {
    const res = await fetch(`https://localhost:3000/api/houses`)
    return res.json()
}

export async function placeLoader() {
    const res = await fetch(`https://localhost:3000/api/places`)
    return res.json()
}

export async function singleCharacterLoader(characterId) {
    const res = await fetch(`https://localhost:3000/api/characters/${characterId}`)
    return res.json()
}

export async function singleHouseLoader(houseId) {
    const res = await fetch(`https://localhost:3000/api/houses/${houseId}`)
    return res.json()
}

export async function singlePlaceLoader(placeId) {
    const res = await fetch(`https://localhost:3000/api/${placeId}`)
    return res.json()
}
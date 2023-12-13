export async function characterLoader() {
    const res = await fetch(`/api/characters`)
    return res.json()
}

export async function houseLoader() {
    const res = await fetch(`/api/houses`)
    return res.json()
}

export async function placeLoader() {
    const res = await fetch(`/api/places`)
    return res.json()
}

export async function createLoader() {
    const res1 = await fetch('/api/houses')
    const houses = await res1.json()
    const res2 = await fetch('/api/characters')
    const characters = await res2.json()
    return { houses, characters }
}


export async function singleCharacterLoader(characterId) {
    const res = await fetch(`/api/characters/${characterId}`)
    const singleCharacter = await res.json()

    const res1 = await fetch('/api/houses')
    const houses = await res1.json()

    const all = await fetch(`/api/characters`)
    const allCharacters = await all.json()
    return { singleCharacter, allCharacters, houses }

}

export async function singleHouseLoader(houseId) {
    const res = await fetch(`/api/houses/${houseId}`)
    return res.json()
}

export async function singlePlaceLoader(placeId) {
    const res = await fetch(`/api/places/${placeId}`)
    return res.json()
}

export async function profileLoader(userId) {
  const res = await fetch(`/api/users/${userId}`)
  return res.json()
}
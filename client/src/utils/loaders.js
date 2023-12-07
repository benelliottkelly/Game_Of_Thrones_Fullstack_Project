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

export async function singleCharacterLoader(characterId) {
 const res = await fetch(`/api/characters/${characterId}`)
  return res.json()
}

export async function singleHouseLoader(houseId) {
 const res = await fetch(`/api/houses/${houseId}`)
  return res.json()
}

export async function singlePlaceLoader(placeId) {
 const res = await fetch(`/api/places/${placeId}`)
  return res.json()
}
import express from 'express'

import {
  getAllHouses,
  getSingleHouse
} from '../controllers/houses.js'

import {
  getAllCharacters,
  createCharacter,
  showSingleCharacter,
  updateCharacter,
  deleteCharacter
} from '../controllers/characters.js'

import {
  getAllPlaces,
  getSinglePlace
} from '../controllers/places.js'

const router = express.Router()

router.route('/houses')
  .get(getAllHouses)

router.route('/houses/houseId')
  .get(getSingleHouse)
  
// characters
router.route('/characters')
  .get(getAllCharacters)
  .post(createCharacter)

router.route('/characters/:characterId')
  .get(showSingleCharacter)
  .put(updateCharacter)
  .delete(deleteCharacter)

router.route('/places')
  .get(getAllPlaces)

router.route('/places/:placesId')
  .get(getSinglePlace)


export default router
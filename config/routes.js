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

import { register, login, getProfile } from '../controllers/users.js'

import secureRoute from './secureRoute.js'

const router = express.Router()

router.route('/houses')
  .get(getAllHouses)

router.route('/houses/:houseId')
  .get(getSingleHouse)
  
// characters
router.route('/characters')
  .get(getAllCharacters)
  .post(secureRoute, createCharacter)

router.route('/characters/:characterId')
  .get(showSingleCharacter)
  .put(secureRoute, updateCharacter)
  .delete(secureRoute, deleteCharacter)

router.route('/places')
  .get(getAllPlaces)

router.route('/places/:placeId')
  .get(getSinglePlace)

router.route('/login')
  .post(login)

router.route('/register')
  .post(register)

router.route('/users/:userId')
  .get(getProfile)

export default router
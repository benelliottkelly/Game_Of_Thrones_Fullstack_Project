import express from 'express'

import {
  getAllHouses,
  getSingleHouse
} from '../controllers/houses.js'

const router = express.Router()

router.route('/houses')
  .get(getAllHouses)

router.route('/houses/houseId')
  .get(getSingleHouse)

export default router
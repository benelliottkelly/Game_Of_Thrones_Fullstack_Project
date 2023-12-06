import express from 'express'

import { getAllPlaces, getSinglePlace } from '../controllers/places.js'

const router = express.Router()

router.route('/places')
    .get(getAllPlaces)

router.route('/places/:placesId')
    .get(getSinglePlace)

export default router
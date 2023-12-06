import express from 'express'

const router = express.Router()

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
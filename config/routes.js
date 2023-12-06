import express from 'express'
import { createCharacter, deleteCharacter, getAllCharacters, showSingleCharacter, updateCharacter } from '../controllers/characters'

const router = express.Router()

// characters
router.route('/characters')
  .get(getAllCharacters)
  .post(createCharacter)

router.route('/characters/:characterId')
  .get(showSingleCharacter)
  .put(updateCharacter)
  .delete(deleteCharacter)

export default router
import Character from "../models/character.js";

// * Index
// Method: GET
// Path: /Characters

export const getAllCharacters = async (req, res) => {
  const character = await Character.find()
  return res.json(movies)
}

// * Create 
// Method: Post
// Path: /characters

export const createCharacter =  async (req, res) => {
  try {
    req.body.owner = req.currentUser._id
    const characterToCreate = Character.create()
    return res.status(201).json(chracterToCreate)
  } catch(error){
    console.log(error)
    return res.status(400).json(error)
  }
}

// * Show single character
// Method: Get
// Path: /characters/:characterId

export const showSingleCharacter = async (req, res) => {
  try {
    const { characterId } = req.params
    const character = await Character.findById(characterId)

    if (!character) {
      return res.status(400).json({ message: 'Character not found' })
    }

  return res.json(character)

  } catch(error) {
    return res.status(400).json(error)
  }
}

// * Update character 
// Method: Put
// Path: /characters/:characterId

export const updateCharacter = async (req, res) => {
  try {
      const character = await Character.findOneAndUpdate({ _id: req.params.characterId })
      if(!character.owner.equals(req.currentUser._id)) {
          return res.status(401).json({ message: 'Unauthorized' })
      }
      if(!character) {
          return res.status(404).json({ message: "Character not found" })
      }
      return res.json(character)
  } catch (error) {
      console.log(error)
  }
}

// * Delete character
// Method: Delete
// Path: /characters/:characterId

export const deleteCharacter = async (req, res) => {
  try{
    const character = await Character.findOneAndDelete({ _id: req.params.characterId })

  if(!character.owner.equals(req.currentUser._id)) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  if(!character) {
    return res.status(404).json({ message: "Character not found" })
  }

  return res.sendStatus(204)

  } catch(error) {
  return res.status(400).json(error)
  }
}
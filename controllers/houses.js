import House from '../models/house.js'

export const getAllHouses = async (req, res) => {
  const houses = await House.find().populate('characters').populate('places')
  console.log(houses)
  return res.status(200).json(houses)
}

export const getSingleHouse = async (req, res) => {
  try {
    const { houseId } = req.params
    const house = await House.findById(houseId).populate('characters').populate('places')
    if (!house) {
      return res.ststus(404).json({ message: 'There is no house of this name.'})
    }
    return res.json(house)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}
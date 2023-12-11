import Place from "../models/place.js"
export const getAllPlaces = async (req, res) => {
    const places = await Place.find().populate('charactersInPlace')
    console.log(places)
    return res.json(places)
}
export const getSinglePlace = async (req, res) => {
    try {
        const { placeId } = req.params
        const place = await Place.findById(placeId).populate('charactersInPlace').populate('occupyingHouses')
        if (!place) {
            return res.status(404).json({ message: 'Place not found' })
        }
        return res.json(place)
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}
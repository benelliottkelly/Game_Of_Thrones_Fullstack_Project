import mongoose from 'mongoose'

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  region: { type: String, required: true },
  image: { type: String },
  occupiedBy: { type: [String] }
})

placeSchema.set('toJSON', {
  virtuals: true
})

placeSchema.virtual('charactersInPlace', {
  ref: 'Character',
  localField: 'name',
  foreignField: 'hometown'
})

placeSchema.virtual('occupyingHouses', {
  ref: 'House',
  localField: 'occupiedBy',
  foreignField: 'houseName'
})

export default mongoose.model('Place', placeSchema)
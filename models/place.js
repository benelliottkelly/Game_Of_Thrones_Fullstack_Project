import mongoose from 'mongoose'

const placeSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    region: { type: String },
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

export default mongoose.model('Place', placeSchema)
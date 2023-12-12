import mongoose from 'mongoose'

const housesSchema = new mongoose.Schema({
  houseName: {type: String, required: true, maxlength: 60},
  motto: { type: String, required: true },
  crest: {type: String, required: true},
  description: {type: String, required: true},
  notableBattles: [{type: String}],
  bannermen: [{type: String}],
})

housesSchema.set('toJSON', {
  virtuals: true
})

housesSchema
	.virtual('characters', {
		ref: 'Character',
		localField: 'houseName',
		foreignField: 'house'
})

housesSchema
  .virtual('places', {
    ref: 'Place',
    localField: 'houseName',
    foreignField: 'occupiedBy'
})

export default mongoose.model('House', housesSchema)
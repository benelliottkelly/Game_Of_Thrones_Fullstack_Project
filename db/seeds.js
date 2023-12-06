import Place from '../models/place.js'
import House from '../models/house.js'
import Character from '../models/character.js'
import User from '../models/user.js'

import placeData from './data/places.js'
import houseData from './data/houses.js'
import characterData from './data/characters.js'
import userData from './data/users.js'

import mongoose from 'mongoose'
import 'dotenv/config'

async function seed() {
    try {
        // Establish connection to database
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('Database connection established')

        // Remove existing data
        const { deletedCount: deletedPlacesCount } = await Place.deleteMany()
        console.log(`Deleted ${deletedPlacesCount} places from the database`)

        const { deletedCount: deletedHouseCount } = await House.deleteMany()
        console.log(`Deleted ${deletedHouseCount} houses from the database`)

        const { deletedCount: deletedCharacterCount } = await Character.deleteMany()
        console.log(`Deleted ${deletedCharacterCount} characters from the database`)

        const { deletedCount: deletedUserCount } = await User.deleteMany()
        console.log(`Deleted ${deletedUserCount} users from the database`)


        // Add seeded users into the database
        const usersCreated = await User.create(userData)
        console.log(`Seeded ${usersCreated.length} users to the database`)

        const ownedCharacters = characterData.map(char => {
            return { ...char, owner: usersCreated[0]._id }
        })

        const charactersCreated = await Character.create(ownedCharacters)
        console.log(`Seeded ${charactersCreated.length} characters to the database`)


        const placesCreated = await Place.create(placeData)
        console.log(`Seeded ${placesCreated.length} places to the database`)

        const housesCreated = await House.create(houseData)
        console.log(`Seeded ${housesCreated.length} houses to the database`)

        console.log(charactersCreated)


        // Close connection to the database
        await mongoose.connection.close()
        console.log('Connection to database is closed')

    } catch (error) {
        console.log(error)

        await mongoose.connection.close()
        console.log('Connection to database is closed')
    }
}
seed()
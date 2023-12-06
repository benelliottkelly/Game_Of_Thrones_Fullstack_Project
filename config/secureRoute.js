import jwt from 'jsonwebtoken'
import User from '../models/user.js'

export default async function secureRoute(req, res, next) {
    try {
        // 1. Ensure Authorization header was passed with the request
        if (!req.headers.authorization) throw new Error('Mssing headers')

        // 2. Extract token from the header, removing 'Bearer '
        const token = req.headers.authorization.replace('Bearer ', '')

        // 3. Use verify method to check if token is valid
        // If so this means the secret matched our sever secret, and the expiry is in date
        const payload = jwt.verify(token, process.env.SECRET)

        // 4. Ensure the user identified by the sub still exists in our database
        const userToVerify = await User.findById(payload.sub)
        if (!userToVerify) throw new Error('User not found')

        // 5. Assign the document the the currentUser key of the request object, making it accessible in the final controller under that key
        req.currentUser = userToVerify

        // 6. If user still exists, then pass to final controller
        next()

    } catch (error) {
        console.log(error)
        return res.status(401).json({ message: 'Log in for Authorization' })
    }
}
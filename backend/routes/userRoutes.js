import express from 'express'
import { authUser, registerUser } from '../controller/userController.js'

const router = express.Router()

//@desc   Authenticate user and generate token
//route   POST /api/users/login
//access  Public
router.post('/login', authUser)


//@desc   Register a new user
//route   POST /api/users
//access  Public
router.route('/').post(registerUser)


export default router
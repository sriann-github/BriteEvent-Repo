import express from 'express'
import { authUser, getUserProfile, registerUser, updateUserProfile } from '../controller/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

//@desc   Authenticate user and generate token
//route   POST /api/users/login
//access  Public
router.post('/login', authUser)

//@desc   Get user profile
//route   GET /api/users/profile
//access  private
router.route('/profile').get(protect, getUserProfile)

//@desc   Update user profile
//route   GET + PUT /api/users/profile
//access  private
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

//@desc   Register a new user
//route   POST /api/users
//access  Public
router.route('/').post(registerUser)


export default router
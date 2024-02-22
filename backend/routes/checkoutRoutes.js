import {addOrderItem, getOrderById, updateOrderToPaid} from '..controllers/orderController'
import {protect } from '../middleware/authMiddleware.js'
import express from 'express'

const router = express.Router()

// @desc   Create a new Order
// @route  POST /api/order
// @access private
router.route('/').post(protect, addOrderItem)

// @desc  get order by Id
// @route GET /api/order/:id
// @access private
router.route('/:id').get(protect, getOrderById)

// @desc  get order by Id
// @route GET /api/order/:id
// @access private
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router



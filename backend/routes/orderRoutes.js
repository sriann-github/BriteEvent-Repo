import {addOrderItems, getOrderById, updateOrderToPaid} from '../controller/orderController.js'
import {protect } from '../middleware/authMiddleware.js'
import express from 'express'

const router = express.Router()

// @desc   Create a new Order
// @route  POST /api/orders
// @access private
router.route('/').post(protect, addOrderItems)

// @desc  get order by Id
// @route GET /api/orders/:id
// @access private
router.route('/:id').get(protect, getOrderById)

// @desc  get order by Id
// @route GET /api/orders/:id
// @access private
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router



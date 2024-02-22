import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

const addOrderItem = asyncHandler(async(req, res) => {
  const{
    orderItems,
    paymentMethod,
    taxPrice,
    totalPrice
  } = req.body

  if(orderItems){
    const order = new Order({
      orderItems,
      user: req.user._id,
      paymentMethod,
      taxPrice,
      totalPrice
    })
    const createOrder = await order.save()
    res.status(201).json(createOrder)
  }
  else{
    res.status(400)
    throw new Error('No order item')
  }  
})

const getOrderById = asyncHandler(async(req, res) => {
  const order = await order.findById(req.params.id).populate
  (
    'user',
    'name email'
  )
  if(order){
    res.json(order)
  }else{
    res.status(404)
    throw new Error('Order not found')
  }
})

const updateOrderToPaid = asyncHandler(async(req, res) => {
  const order = await Order.findById(req.params.id)
  if(order){
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address
    }
    const updatedOrder = await order.save()
    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})


export {addOrderItem, getOrderById, updateOrderToPaid}


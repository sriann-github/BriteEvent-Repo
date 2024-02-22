import asyncHandler from 'express-async-handler'

const getOrderDetails = asyncHandler(async(req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )
  if (order){
    res.json(order)
  } else {
    res.status(404)
    throw new Error ('Order not found')
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

export {getOrderDetails, updateOrderToPaid}
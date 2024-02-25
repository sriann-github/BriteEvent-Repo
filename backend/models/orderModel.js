import mongoose from 'mongoose'

const OrderSchema = mongoose.Schema(
  {
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    orderItems:
      {
      name: {type: String, required:true},
      qty: {type: Number, required:true},
      image: {type: String, required: true},
      price: {type:Number, required: true},
      event: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'events'
        },
      },
    paymentMethod: {
      type: String,
      required: true
    },
    paymentResult:{
      id: {type: String},
      status:{type: String},
      update_time: {type: String},
      email_address: {type: String}
    },
    taxPrice:{
      type: Number,
      required: true,
      default: 0.0
    },
    totalPrice:{
      type: Number,
      required: true,
      default: 0.0
    },
    isPaid:{
      type:Boolean,
      require:true,
      default: false
    },
    paidAt:{
      type:Date
    },
  }
)

const Order = mongoose.model('orders', OrderSchema)
export default Order
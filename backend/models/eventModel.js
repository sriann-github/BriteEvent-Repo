import mongoose from'mongoose'

const eventSchema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  image:{
      type:String,
      required:true
  },
  location:{
    type:String,
    required:true
  },
  organization:{
    type:String,
    required:true
  },
  startDate:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true,
    default: 'Free'
  },
  numTickets:{
    type:Number,
    required:true,
    default:0
  }
},{
  timestamps:true
})

const Event = mongoose.model('events', eventSchema)
export default Event
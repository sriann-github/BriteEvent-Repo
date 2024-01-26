import dotenv from 'dotenv'
import users from './data/users.js'
import events from './data/events.js'
import User from './models/userModel.js'
import Event from './models/eventModel.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const seedData = async () =>{
  try{
    await User.deleteMany()
    await Event.deleteMany()

    const createdUsers = await User.insertMany(users)
    const exampleUser = createdUsers[0]._id

    const exampleEvent = events.map(anevent => {
      return {...anevent, user: exampleUser}
    })
    await Event.insertMany(exampleEvent)

    console.log('Data imported!')
    process.exit(1)


  } catch (error){
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try{
    await User.deleteMany()
    await Event.deleteMany()

    console.log('Data destroyed!')
    process.exit(1)

  } catch (error){
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

if (process.argv[2]==='-d'){
  destroyData()
} else {
  seedData()
}
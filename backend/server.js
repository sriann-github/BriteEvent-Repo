import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import eventRoutes from './routes/eventRoutes.js'
import errorHandler from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'

const app = express()
dotenv.config()
connectDB()

app.use(express.json()) //data from FE will be converted to json

app.use('/api/events', eventRoutes)

app.use('/api/users', userRoutes)

//app.use(`api/checkout`, checkoutRoute)

app.use(errorHandler)
app.listen(5000, console.log('Server is running on port 5000'))
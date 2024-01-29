import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import router from './routes/eventRoutes.js'

const app = express()
dotenv.config()
connectDB()

app.use('/api/events', router)

app.use(errorHandler)
app.listen(5000, console.log('Server is running on port 5000'))
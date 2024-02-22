import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import eventRoutes from './routes/eventRoutes.js'
import errorHandler from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

const app = express()
dotenv.config()
connectDB()

app.use(express.json()) //data from FE will be converted to json

app.use('/api/events', eventRoutes)

app.use('/api/users', userRoutes)

<<<<<<< HEAD
app.use('/api/orders', orderRoutes)

=======
>>>>>>> 09d919de6c3acb139e18d9a0ac81f6b72f476dd9
app.get('/api/config/pay', (req, res) => 
  res.send(process.env.PAYPAL_CLIENT_ID)
)

app.use(errorHandler)
app.listen(5000, console.log('Server is running on port 5000'))
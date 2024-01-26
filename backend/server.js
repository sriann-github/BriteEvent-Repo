import express from 'express'
import events from './data/events.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

const app = express()
dotenv.config()
connectDB()

//When a request is submitted from the FE for a list of events, it's read here and a json object is returned as events
app.get('/api/events', (req, res) => {
  res.json(events)
})

app.get('/api/event/:id', (req, res) =>
{
  const event = events.find(e => e.id === req.params.id)
  res.json(event)
})

app.listen(5000, console.log('Server is running on port 5000'))
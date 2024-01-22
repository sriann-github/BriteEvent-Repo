import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { Card } from 'react-bootstrap'

const EventScreen = () => {

  const params = useParams();
  const [event, setEvent] = useState({})

  useEffect( () => {
    const fetchEvent = async() => {
      const {data} = await axios.get(`/api/event/${params.id}`)
      setEvent(data)
    }

    fetchEvent()
   }
  )

  return (
    <>
        <Card className= 'my-5 p-3 rounded'>   
         <Card.Img src={event.image} variant='top'/>       
          <Card.Body>
            <Card.Title as='div' className='mb-2'>
              <strong>{event.name}</strong>
            </Card.Title>          
            <Card.Text>
              <small>{event.location}</small>
            </Card.Text>
          </Card.Body>
        </Card>
    </>

   )
  }


export default EventScreen
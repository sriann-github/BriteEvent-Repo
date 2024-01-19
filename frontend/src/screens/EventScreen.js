import { useParams } from "react-router-dom"
import React from 'react'
import events from '../events'
import EventHeader from "../Components/EventHeader"
//import axios from 'axios'
import {Card} from 'react-bootstrap'

const EventScreen = () => {
 /* const params = useParams();
  const [event, setEvent] = useState({}) 

  useEffect(() => {
    const fetchEvent = async () => {
      const { data } = await axios.get(`/api/event/${params.id}`)
      setEvent(data)

      fetchEvent()
    }
  }
  ) */

  const params = useParams();
  const event = events.find(e => e.id === params.id)

  return (
  <>
    <EventHeader />
    <Card className='my-5 p-3 rounded'>
      <Card.Body>
        <Card.Title as='div'>
          <strong>{event.Title}</strong>
        </Card.Title>
        <Card.Text as="div">
          <h3>{event.description}</h3>
        </Card.Text>
      </Card.Body>
    </Card>
  </>

    )
}

export default EventScreen
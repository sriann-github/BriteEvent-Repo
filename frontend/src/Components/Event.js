import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Event = ({event}) => {

  /* if (typeof event === 'undefined') {
    console.log('undefined')
  }
  else{
    console.log(JSON.stringify(event))
  }*/

  return (
    <Card className= 'border-0 my-3 p-3 rounded'>
      <Link to={`/events/${event._id}`}>
        <Card.Img src={event.image} variant='top'/>
      </Link>
      <Card.Body className='px-1'>
        <Link to={`/events/${event._id}`} className='text-secondary-emphasis text-decoration-none'>
          <Card.Title as='div' className='mb-2 fw-bold lh-sm'>
            {event.name}
          </Card.Title>
        </Link>
          <Card.Text className='mb-0 lh-1'>
          <small>{event.startDate}</small>
          </Card.Text>
          <Card.Text className='text-muted mb-2 lh-1'>
            <small>{event.location}</small>
          </Card.Text>
          <Card.Text className='mb-2'>
            {event.price}
          </Card.Text>
          <Card.Text className='text-muted lh-1'>
            <small>{event.description}</small>
          </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Event
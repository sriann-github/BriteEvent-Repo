import React from 'react'
import {Card} from 'react-bootstrap'

const Event = ({event}) => {
  return (
    <Card className= 'my-5 p-3 rounded'>
      <Card.Img src={event.image} variant='top'/>
      <Card.Body>
        <Card.Title as='div' className='mb-2'>
          <strong>{event.name}</strong>
        </Card.Title>
        <Card.Subtitle as='div' className='text-muted'>
          {event['start Date']}
        </Card.Subtitle>
        <Card.Text>
          <small>{event.location}</small>
        </Card.Text>
        <Card.Text>
          {event.price}
        </Card.Text>
        <Card.Text className='text-muted'>
          <small>{event.description}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Event
import React from 'react'
import {Card} from 'react-bootstrap'

const Events = ({event}) => {
  return (
    <Card className= 'my-5 p-3 rounded'>
      <Card.Img src={event.logo.url} variant='top'/>
      <Card.Body>
        <Card.Title as='div'>
          <strong>{event.name.text}</strong>
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default Events
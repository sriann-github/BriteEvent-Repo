import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { Row, Container, ListGroup, Col, Carousel, ListGroupItem, Button } from 'react-bootstrap'



const EventScreen = () => {

  const params = useParams();
  const [event, setEvent] = useState({})

  useEffect( () => {
    const fetchEvent = async() => {
      const {data} = await axios.get(`/api/events/${params.id}`)
      setEvent(data)
    }

    fetchEvent()
   }
  )

  return (

    <>
      <Container fluid="xxl" className="px-md-5 my-4 pb-2">
        <Row >
          <Col sm={12}>
            <Carousel className="event-hero">              
              <Carousel.Item className="text-center">
                <img src={event.image} alt='event'/>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container fluid="xxl" className="px-md-5">
        <Row>
          <Col sm={8} className='me-3' >
            <ListGroup variant='flush' className="border border-0 ">     
                <ListGroupItem className="border border-0 my-3">
                  <h5> {event.startDate} </h5>
                </ListGroupItem>
                <ListGroupItem className='border border-0 my-3 fs-6'>
                  <h3>{event.name}</h3>
                </ListGroupItem>
                <ListGroupItem className='border-0 fw-semibold fs-6'>
                  <span>
                    {event.description}
                  </span>
                </ListGroupItem>
                <ListGroupItem className='mt-3 mx-5' >
                 <h6> By {event.organization} </h6>
                </ListGroupItem>
                <ListGroupItem className="border border-0 my-5">
                  <h5 className="fw-semibold">Location</h5>
                  <span>{event.location} </span> 
                </ListGroupItem>
                <ListGroupItem>

                </ListGroupItem>
            </ListGroup>
          </Col>
          <Col className=''>
           <ListGroup>
            <ListGroupItem className='text-center'>             
              {event.price > 0 ? `${event.price}` : 'free'}
            </ListGroupItem>
            <ListGroupItem>
             <Row>
              <Button variant="primary"> Get Tickets
              </Button>
             </Row>
            </ListGroupItem>
           </ListGroup>           
          </Col>
        </Row>
      </Container>
    </>

   )
  }


export default EventScreen
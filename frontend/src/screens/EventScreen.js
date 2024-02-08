import React, {useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { Row, Container, ListGroup, Col, Carousel, ListGroupItem, Button } from 'react-bootstrap'
import { eventDetailsAction } from '../actions/eventActions'
import Loader from '../Components/Loader'
import Message from '../Components/Message'

const EventScreen = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(eventDetailsAction(params.id))
   },[dispatch,params])

  const eventDetails = useSelector((state)=> state.eventDetails)
  const {loading, event, error} = eventDetails

  const checkoutHandler = () =>{
    navigate('/login?redirect=/payment')
  }
  return (
    <>
     {
      loading? <Loader/>
      :error? <Message variant='danger'>{error}</Message> 
      :(
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
                <Button 
                variant="primary"
                disabled= {event.numTickets === 0}
                onClick = {checkoutHandler}
                > Get Tickets
                </Button>
              </Row>
              </ListGroupItem>
            </ListGroup>           
            </Col>
          </Row>
        </Container>
        </>
      )}
    </>

   )
  }


export default EventScreen
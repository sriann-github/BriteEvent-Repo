import React, {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { Row, Container, ListGroup, Col, Carousel, ListGroupItem, Button } from 'react-bootstrap'
import { eventDetailsAction } from '../actions/eventActions'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import OrderScreen from './OrderScreen'

const EventScreen = () => {

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(eventDetailsAction(params.id))
   },[dispatch,params])

  const eventDetails = useSelector((state)=> state.eventDetails)
  const {loading, event, error} = eventDetails

 const [modalState, setModalState] = useState(false)

 const toggleModal = () =>{
  setModalState(!modalState)
 }

 /*let token = useRef(false)

 function handleClick(){
  token.current = true
  alert('value of token: ' + token.current);
 }
*/

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
                  <ListGroupItem className="border-0 mt-3 pb-0">
                    <h5> {event.startDate} </h5>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 py-0'>
                    <h2>{event.name}</h2>
                  </ListGroupItem>
                  <ListGroupItem className='mx-5 my-3' >
                  <h6> By {event.organization} </h6>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 fw-semibold'>
                    <span>
                      {event.description}
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 my-5">
                    <h6>Location:</h6>
                    <span className='fw-semibold'><i class="fa-solid fa-location-dot"></i> {event.location}</span> 
                  </ListGroupItem>
              </ListGroup>
            </Col>
            <Col className='mt-3'>
            <ListGroup>
              <ListGroupItem className='text-center'>             
                <span className='fw-semibold'>{event.price > 0 ? `$${event.price}` : 'free'}</span>
              </ListGroupItem>
              <ListGroupItem>
              <Row>
                <Button 
                style={{backgroundColor:'#d1410c', borderColor:'#d1410c'}}
                disabled= {event.numTickets === 0}
                onClick = {toggleModal}
                ><span className='fw-semibold'>Get Tickets</span>

                </Button>
                <OrderScreen showModal={modalState} closeModal={toggleModal}></OrderScreen>
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
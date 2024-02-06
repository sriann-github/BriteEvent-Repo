import Event from '../Components/Event'
import Banner from '../Components/Banner';
import { Container, Col, Row } from 'react-bootstrap'
import Icons from '../Components/Icons';
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {eventActions} from '../actions/eventActions'
import Loader from '../Components/Loader'
import Message from '../Components/Message'

const HomeScreen = () => {

  const dispatch = useDispatch()
  
  useEffect( () => {

    dispatch(eventActions())

  },[dispatch])

  const eventsList = useSelector((state) => state.eventsList)
  const {loading, events, error} = eventsList

  return (
    <>
      <Banner />{
       loading? (<Loader />) : 
        error? (<Message variant='danger'> {error} </Message>):
      (
        <Container fluid="xxl" className="px-md-5">
          <Icons />
          <h3 className='mx-5'>Events in Your Area</h3>   
          <Row className='mx-3'>
              {events.map (e => (
              <Col key={e._id} sm={12} md={6} lg={4} xl={3}>
                <Event event={e} />
              </Col>
              ))
              }
          </Row>
        </Container>
      )
    }
  </>
  
  )
}

export default HomeScreen
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { Row, Container, ListGroup, Col, Carousel, ListGroupItem } from 'react-bootstrap'



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
      <Container fluid="xxl" className="px-md-5 my-4">
        <Row>
          <Col>
            <Carousel className="w-40 mx-auto">
              {/*May have to replace this with an array of Carousel.Item */}
              <Carousel.Item>
                <img src={event.image} alt="my image" className="d-flex w-100 h-30 rounded-5" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col className="px-md-5">
           <ListGroup>
            <ListGroupItem>
              Start Date
            </ListGroupItem>
            <ListGroupItem>
              Title
            </ListGroupItem>
            <ListGroupItem>
              Description
            </ListGroupItem>
           </ListGroup>
          </Col>
          <Col>
            {/*Ticket price display*/}
          </Col>
        </Row>
      </Container>
    </>

   )
  }


export default EventScreen
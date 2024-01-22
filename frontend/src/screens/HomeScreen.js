import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Event from '../Components/Event'
import Banner from '../Components/Banner';
import { Container, Col, Row } from 'react-bootstrap'

const HomeScreen = () => {

  const [events, setEvents] = useState([])
  
  useEffect( () => {
    const fetchEvents = async () => {
       const {data} = await axios.get('/api/events')
       setEvents(data)
    }

    fetchEvents()
  })

  return (
    <>  
      <Banner />

      <Container fluid="xxl" className="px-md-5">
        <h2>Events in Your Area</h2>       
        <Row>
        </Row>       
        <Row>
            {events.map (e => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Event event={e} />
            </Col>
            ))
            }
        </Row>
      </Container>
    </>
  )
}

export default HomeScreen
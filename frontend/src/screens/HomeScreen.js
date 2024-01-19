import React from 'react'
import events from '../events'
import Event from '../Components/Event'
import Banner from '../Components/Banner';
import { Container, Col, Row } from 'react-bootstrap'

const HomeScreen = () => {
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
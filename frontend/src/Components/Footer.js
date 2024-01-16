import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const Footer = () => {
  return (
  <>
  <Container>
    <Row className='text-center'>
      <Col>
        <a href='/about'>About Us</a>
      </Col>
      <Col>
        <a href='/organizer'>Create Event</a>
      </Col>
      <Col>
        <a href='/events'>Find Event</a>
      </Col>
    </Row>
    <Row className='text-center'>
      <Col className='copyright'>Copyright &copy; BriteEvent</Col>
    </Row>
  </Container>
  </>
  )
}

export default Footer
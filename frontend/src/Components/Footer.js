import React from 'react'
import { Col, Nav, Container, Row } from 'react-bootstrap'


const Footer = () => {
  return (
  <>
    <Container fluid className='bg-primary'>
      <footer>
        <Nav as="ul" className='text-center'>
            <Nav.Item as="li" className='mx-auto'>
              <Nav.Link href="/about" className='text-light'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className='mx-auto'>
              <Nav.Link href="/organizer" className='text-light'>Create Event</Nav.Link>
          </Nav.Item>
            <Nav.Item as="li" className='mx-auto'>
              <Nav.Link href="/events" className='text-light'>Find Event</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className='mx-auto'>
              <Nav.Link href="/contactus" className='text-light'>Contact Us</Nav.Link>
            </Nav.Item>
        </Nav>
        <Row className='text-center'>
          <Col className='copyright text-light'>Copyright &copy; BriteEvent</Col>
         </Row>
      </footer>
    </Container>
  </>
  )
}

export default Footer
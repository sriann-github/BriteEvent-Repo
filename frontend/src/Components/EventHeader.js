import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const EventHeader = () => {
  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >eventbrite</Navbar.Brand>
          <Navbar.Toggle arian-controls="basic-navbar-nav" />
            <Nav className="me-auto">
              <Nav.Link href="/">Browse Events</Nav.Link>
              <Nav.Link href="/login"> <i class="fa-solid fa-user"></i>Sign In</Nav.Link>  
            </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default EventHeader
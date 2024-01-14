import React from 'react';
import { Container, Navbar, Nav, Button, Form, Col } from 'react-bootstrap';


const Header = () => {
  return (
      
    <Container fluid className="px-0">
      <header>
        <Navbar expand="md" className="bg-primary" data-bs-theme="dark">
          <Navbar.Brand className="px-2 m-0" href="/">BriteEvent</Navbar.Brand>
          
          <Col>
            <Form className="flex-grow-1 p-0 bd-highlight">
              <Form.Control
                size="sm"
                type="text"
                placeholder="Search Events"
                className=""
              />
              {/*<Button type="submit" className="ms-2 btn btn-info fs-6">Submit</Button> */}
            </Form>
          </Col>
          
          <Navbar.Toggle aria-controls='basic-navbar-nav' className="ms-2 me-2 px-2" />
          
          <Navbar.Collapse className="flex-grow-0 ms-3 me-2" id='basic-navbar-nav'>
            <Nav className='fs-6 ms-auto'>
                <Nav.Link as={Button} href='/events'>Find Events</Nav.Link>
                <Nav.Link as={Button} href='/organizer'>Create Events</Nav.Link>
                {/* Help center still needs dropdown window controls */}
                <Nav.Link as={Button} href='/help'>Help Center</Nav.Link>
                <Nav.Link as={Button} href='/signin'>Log In</Nav.Link>
                <Nav.Link as={Button} href='/signin/signup'>Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </Container>
  );
};

export default Header;
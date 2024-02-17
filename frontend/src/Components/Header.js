import React from 'react';
import { Container, Navbar, Nav, Form, Col, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { logout } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state)=> state.userLogin)
  const {userInfo} = userLogin
  
  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <Container fluid className="px-0">
      <header>
        <Navbar expand="md" className="" data-bs-theme="light">
          <Navbar.Brand>
            <Link className="fw-bold text-danger px-2 m-0 text-decoration-none" to='/'>
            BriteEvent
            </Link>
          </Navbar.Brand>
          
          <Col>
            <Form className="flex-grow-1 p-0 bd-highlight">
              <Form.Control
                size=""
                type="text"
                placeholder="Search Events"
                className="rounded-5"
              />
              {/*<Button type="submit" className="ms-2 btn btn-info fs-6">Submit</Button> */}
            </Form>
          </Col>
          
          <Navbar.Toggle aria-controls='basic-navbar-nav' className="ms-2 me-2 px-2" />
          
          <Navbar.Collapse className="flex-grow-0 ms-3 me-2" id='basic-navbar-nav'>
            <Nav className='fw-bold ms-auto'>
                <Nav.Link as={Link} variant="light" to ='/events'>Find Events</Nav.Link>
                <Nav.Link as={Link} variant="light" to ='/organizer'>Create Events</Nav.Link>

            {userInfo? (
              <NavDropdown title={userInfo.name} id='username'>
                <NavDropdown.Item as={Link} to ='/profile'>
                  Account
                  </NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
              ):(<Nav>
                  <Nav.Link as={Link} variant="light" to='/login'>Log In</Nav.Link>
                  <Nav.Link as={Link} variant="light" to ='/register'>Sign Up</Nav.Link>
                </Nav> 
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </Container>
  );
};

export default Header;
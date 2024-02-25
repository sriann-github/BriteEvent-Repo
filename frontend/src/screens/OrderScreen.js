import {Modal, Row, Col, Container, Button, Card, Form} from 'react-bootstrap'
import React, {useEffect, useState, useRef} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import CheckoutScreen from './CheckoutScreen'
import {selectTickets} from '../actions/ticketActions'
import LoginModalComponent from '../Components/LoginModalComponent'
import IncrementDecrementComponent from '../Components/IncrementDecrementComponent'

const OrderScreen = (props) =>
{
  const dispatch = useDispatch()

  const [qty, setQty] = useState(0);
  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin
  let userLoginPrompt = useRef(false)

  const checkUserInfo = () =>{
    if(typeof userInfo === 'undefined')
    {
      userLoginPrompt.current = true
      toggleLoginModal()
    }
  }
  const eventDetails = useSelector((state)=> state.eventDetails)
  const {event} = eventDetails

  const [checkoutModalState, setCheckoutModalState] = useState(false)

  const toggleCheckoutModal = () =>{
    dispatch(selectTickets(qty))
    setCheckoutModalState(!checkoutModalState)
  }

  const userAlreadyLogggedIn = false

  const checkoutControl = () => {
    checkUserInfo()
    if(userLoginPrompt === false)
    {
       userAlreadyLogggedIn = true
    }
    toggleCheckoutModal()
    props.closeModal()
  }

  const [loginModalState, setLoginModalState] = useState(false)

  const toggleLoginModal = () =>{
    setLoginModalState(!loginModalState)
  }

  return (
    <> 
     {userLoginPrompt.current ? (<LoginModalComponent 
      showLoginModal={loginModalState}
      closeLoginModal={toggleLoginModal} />) : (
      <Modal 
        show={props.showModal}
        onHide={props.closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
            <h4 className='modal-title w-100 text-center'>{event.name}</h4>
        </Modal.Header>
        <Modal.Body>
            <Container>              
                  <Row className='mt-3'>
                    <Col>
                        <h6 className='mb-0'>General Admission</h6>
                    </Col>
                    <Col>
                      <IncrementDecrementComponent />
                    </Col>
                  </Row>
                  <Row className='mb-3'>
                    <Col>
                      <strong>${event.price}</strong>              
                      <div>sales end on Mar 9, 2024</div>
                    </Col>
                  </Row>
          </Container>
        </Modal.Body>
       <Modal.Footer>
        <Button 
          variant="secondary" 
          onClick={checkoutControl}>
            Check Out
        </Button>
        {userAlreadyLogggedIn && <CheckoutScreen showModal={checkoutModalState} closeModal={toggleCheckoutModal}/>}
       </Modal.Footer >
     </Modal> )
    }
    </>
  );
} 
export default OrderScreen
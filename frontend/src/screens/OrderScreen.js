import {Modal, Row, Col, Container, Button, Card } from 'react-bootstrap'
import React, {useRef, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import CheckoutScreen from './CheckoutScreen'
import {selectTickets} from '../actions/ticketActions'
import LoginModalComponent from '../Components/LoginModalComponent'

const OrderScreen = (props) =>
{
  const dispatch = useDispatch()
  const eventDetails = useSelector((state)=> state.eventDetails)
  const {event} = eventDetails

  let closeOrderModal = useRef(false)
  const [qty, setQty] = useState(0);
  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin

  const incrementCounter = () => {
    setQty(qty + 1)
  }
  const decrementCounter = () => {
    if (qty !== 0) {
      setQty(qty - 1)
    }
  } 
  const [loginModalState, setLoginModalState] = useState(false)

  const toggleLoginModal = () =>{
    setLoginModalState(!loginModalState)
  }

  const [checkoutModalState, setCheckoutModalState] = useState(false)

  const toggleCheckoutModal = () =>{
    setCheckoutModalState(!checkoutModalState)
  }
  const checkoutControl = () => {
    dispatch(selectTickets(qty))
    if(!userInfo){
      toggleLoginModal()
    }else{
      toggleCheckoutModal()
    }
    closeOrderModal.current = true
  }


  return (
    <> 
      {closeOrderModal.current? (
      <>
      <LoginModalComponent 
        showLoginModal={loginModalState}
        closeLoginModal={toggleLoginModal} 
      />
      <CheckoutScreen 
        showModal={checkoutModalState} 
        closeModal={toggleCheckoutModal}
      />
      </>):(
      <Modal 
        show= {props.showModal}
        onHide={props.closeModal}
        size="lg"
        centered>
        <Modal.Header closeButton>
            <h4 className='modal-title w-100 text-center'>{event.name}</h4>
        </Modal.Header>
        <Modal.Body>
          <Row className='justify-content-md-center'>
            <Col md={9}>
            <Container className='border'>              
                  <Row className='mt-3'>
                    <Col md={8} xs={7}>
                        <h6 className='mb-0'>General Admission</h6>
                    </Col>
                    <Col md={4} xs={5}>
                      <div className="ticket-options" >
                        <Button onClick={decrementCounter} disabled={qty===0}>
                          <i class="fa-sharp fa-solid fa-minus"></i>
                        </Button>
                        <span className="number mx-3">{qty}</span>
                        <Button onClick={incrementCounter}>
                          <i class="fa-sharp fa-solid fa-plus"></i>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  <Row className='mb-3'>
                    <Col>
                      <strong>${event.price}</strong>              
                      <div>sales end on Mar 9, 2024</div>
                    </Col>
                  </Row>
          </Container>
          </Col>
          </Row>
        </Modal.Body>
       <Modal.Footer>
        <Button 
          variant="dark" 
          onClick={checkoutControl}
          disabled={qty===0}
        > Check Out
        </Button>
       </Modal.Footer >
     </Modal> 
      )
    }
    </>
  );
} 
export default OrderScreen
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
      /></>):(
      <Modal 
        show= {props.showModal}
        onHide={props.closeModal}
        size="lg"
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
                    <Card>
                      <div className="ticket-options" >
                        <Button onClick={incrementCounter}>
                          <i class="fa-sharp fa-solid fa-plus"></i>
                        </Button>
                        <span className="number">{qty}</span>
                        <Button onClick={decrementCounter}>
                          <i class="fa-sharp fa-solid fa-minus"></i>
                        </Button>
                      </div>
                    </Card>
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
          onClick={checkoutControl}
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
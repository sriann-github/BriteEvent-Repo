import {Modal, Row, Col, Container, Button, Card, Image } from 'react-bootstrap'
import React, {useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import CheckoutScreen from './CheckoutScreen'
import {selectTickets} from '../actions/ticketActions'
import LoginModalComponent from '../Components/LoginModalComponent'

const OrderScreen = (props) =>
{
  const dispatch = useDispatch()
  const eventDetails = useSelector((state)=> state.eventDetails)
  const {event} = eventDetails

  const [qty, setQty] = useState(0);
  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin
  let userLoginPrompt = useRef(false)

  const incrementCounter = () => {
    setQty(qty + 1)
  }
  const decrementCounter = () => {
    if (qty !== 0) {
      setQty(qty - 1)
    }
  } 
  const [checkoutModalState, setCheckoutModalState] = useState(false)

  const toggleCheckoutModal = () =>{
    dispatch(selectTickets(qty))
  }

  const checkUserInfo = () =>{
    if(typeof userInfo === 'undefined')
    {
      userLoginPrompt.current = true
      toggleLoginModal()
    }
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
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
            <h4 className='modal-title w-100 text-center'>{event.name}</h4>          
        </Modal.Header>
        <Modal.Body>
        <Row>
            <Image src={event.image} fluid />
          </Row> 
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
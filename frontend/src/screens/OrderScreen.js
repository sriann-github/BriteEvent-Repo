import {Modal, Row, Col, Container, Button, Card, Form} from 'react-bootstrap'
import React, {useEffect, useState, useRef} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useSelector} from 'react-redux'
import CheckoutScreen from './CheckoutScreen'
import {selectTickets} from '../actions/orderActions'
import LoginModalComponent from '../Components/LoginModalComponent'
import IncrementDecrementComponent from '../Components/IncrementDecrementComponent'

const OrderScreen = (props) =>
{
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

  const [checkoutModalState, setCheckoutModalState] = useState(false)

  const toggleCheckoutModal = () =>{
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
        size="xxl"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Event Heading</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <Card>
                        <h6>General Admission</h6>
                        <div>
                          <strong>$15</strong>              
                        </div>
                        <div>sales end on Mar 9, 2024</div>
                      </Card>
                    </Col>
                    <Col>
                      <IncrementDecrementComponent 
                     />
                    </Col>
                  </Row>
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
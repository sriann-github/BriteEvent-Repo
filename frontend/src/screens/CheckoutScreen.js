
import {Modal, Row, Col, Container, Button, Form, InputGroup} from 'react-bootstrap'
import React, {useRef, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import PlaceOrderScreen from './PlaceOrderScreen'
import { savePaymentMethod } from '../actions/ticketActions'

const CheckoutScreen = (props) => {

  const dispatch = useDispatch()
  const [paymentMethod, setPaymentMethod] = useState('Paypal')
  const Navigate = useNavigate()
  let closeCheckoutModal = useRef(false)
  
  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin

  const [modalState, setModalState] = useState(false)
  const toggleModal = () =>{
    dispatch(savePaymentMethod(paymentMethod))
    setModalState(!modalState)
    closeCheckoutModal.current = true
  } 

  /*const firstName = (typeof userInfo == "underfined")? "FN" : userInfo.name.split(' ')[0]
  const lastName = (typeof userInfo == "underfined")? "LN" : userInfo.name.split(' ')[1]
  const email = (typeof userInfo == "underfined")? "email": userInfo.email */

  const firstName = "FN"
  const lastName = "LN"
  const email = "email"

  return (
    <> {closeCheckoutModal.current? (          
      <PlaceOrderScreen
      showModal={modalState} 
      closeModal={toggleModal}/>
      ):(<Modal 
        show={props.showModal} 
        onHide={props.closeModal}
        size="lg"
        aria-labelledby="conatained-modal-title-vcenter"
        centered>
          <Modal.Header closeButton>
              <h4 className='modal-title w-100 text-center'>Checkout</h4>
          </Modal.Header>
          <Modal.Body>
            <Container>              
                  <Row>
                    <Col>
                    <Row>
                      <h5>Billing Information</h5>
                      <span>
                        <button>
                          Log in
                        </button>
                        for a faster experience.
                      </span>
                      <div>
                        *Required
                      </div>
                      <Form>
                        <Row className="mb-3">
                          <Col>
                          <Form.Control
                          label="First name"
                          placeholder={firstName}
                          required />
                          </Col>
                          <Col>
                          <Form.Control
                          label="Last name"
                          placeholder={lastName}
                          required />
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Form.Group as={Col}
                          required
                          controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder={email} />
                          </Form.Group>                        
                        </Row>
                        <Row>
                          <InputGroup className="mb-3">
                            <InputGroup.Checkbox aria-label="Keep me updated on more events and news from this event organizer."
                            placeholder = "Checkbox1" 
                            />
                            <Form.Control aria-label="Keep me updated on more events and news from this event organizer."/>
                          </InputGroup>
                          <InputGroup className="mb-3">
                            <InputGroup.Checkbox aria-label="Send me emails about the best events happening nearby or online." 
                            />
                            <Form.Control aria-label="Send me emails about the best events happening nearby or online." />
                          </InputGroup>
                        </Row>
                        <Row>
                          <Form.Group
                            required
                            controlId="cell phone">
                            <Form.Label>cell phone</Form.Label>
                            <Form.Control type="cell phone" placeholder="cell phone" />
                          </Form.Group>
                        </Row>
                        <Row>
                          <h4>Payment Method</h4>
                          <Form.Group>
                              <Form.Label as='legend'> Select Payment Method       </Form.Label>
                              <Col>
                                <Form.Check
                                  type='radio'
                                  label='Paypal'
                                  id='Paypal'
                                  value={paymentMethod}
                                  name='paymentMethod'
                                  checked
                                  onChange={(e) => setPaymentMethod(e.target.value)}>
                                </Form.Check>
                              </Col>
                              <Form.Check
                                type='radio'
                                label='Credit Card'
                                id='CreditCard'
                                value={paymentMethod}
                                name='paymentMethod'
                                checked
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                >
                              </Form.Check>
                           </Form.Group>
                        </Row>
                      </Form>
                    </Row>
                  </Col>
                </Row>
              </Container>            
            </Modal.Body>
          
          <Modal.Footer>         
              <Button
                onClick={toggleModal}>
                  Place Order
              </Button>
          </Modal.Footer>
      </Modal>
      )}
  </>
  );
} 

export default CheckoutScreen

import {Modal, Row, Col, Container, Button, Form, InputGroup} from 'react-bootstrap'
import React, {useEffect, useRef, useState} from 'react'
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

  const firstname = userInfo? userInfo.name.split(' ')[0]: " "
  const lastname = userInfo? userInfo.name.split(' ')[1]: " "
  const email = userInfo? userInfo.email: " "
  

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
                      <h5 className='mb-0'>Billing Information</h5>
                      <small>*Required</small>
                      <Form>
                        <Row className="my-2">
                          <Col>
                          <Form.Label>First name*</Form.Label>
                          <Form.Control
                          label="First name"
                          placeholder={firstname}
                          required />
                          </Col>
                          <Col>
                          <Form.Label>Last name*</Form.Label>
                          <Form.Control
                          label="Last name"
                          placeholder={lastname}
                          required />
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Form.Group as={Col}
                          required
                          controlId="formGridEmail">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control type="email" placeholder={email} />
                          </Form.Group>                        
                        </Row>
                        <Row> 
                          <Form.Check
                            type="checkbox"
                            id="autoSizingCheck"
                            className="mb-2"
                            label="Keep me updated on more events and news from this event organizer."
                          />
                          <Form.Check
                            type="checkbox"
                            id="autoSizingCheck"
                            className="mb-2"
                            label="Send me emails about the best events happening nearby or online."
                          />                       
                        </Row>
                        <Row>
                          <h5>Payment Method</h5>
                          <Form.Group>
                              <Form.Label className='mb-0'> Select Payment Method</Form.Label>
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
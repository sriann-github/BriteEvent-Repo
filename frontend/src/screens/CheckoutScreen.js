
import {Modal, Row, Col, Container, Button, Card, Form, InputGroup} from 'react-bootstrap'
import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import PlaceOrderScreen from './PlaceOrderScreen'
import { savePaymentMethod } from '../actions/ticketActions'

const CheckoutScreen = (props) => {

  const dispatch = useDispatch()
  const [paymentMethod, setPaymentMethod] = useState('Paypal')
  const Navigate = useNavigate()
  const params = useParams()

  
  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin

  const [modalState, setModalState] = useState(false)
  const toggleModal = () =>{
    dispatch(savePaymentMethod(paymentMethod))
    setModalState(!modalState)
  }

  const firstName = (typeof userInfo == "undefined")? "FN" : userInfo.name.split(' ')[0]
  const lastName = (typeof userInfo == "undefined")? "LN" : userInfo.name.split(' ')[1]
  const email = (typeof userInfo == "undefined")? "email": userInfo.email

  return (
    <>      
      <Modal 
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
                    <Form>
                      <Row className="mb-3">
                        <Col>
                        <Form.Group as={Col}
                         required
                         controlId="formGridEmail">
                          <Form.Label>First name</Form.Label>
                          <Form.Control type="email" placeholder={firstName} />
                        </Form.Group>                        
                        </Col>
                        <Col>
                        <Form.Group as={Col}
                         required
                         controlId="formGridEmail">
                          <Form.Label>Last name</Form.Label>
                          <Form.Control type="email" placeholder={lastName} />
                        </Form.Group>       
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
                      <Form.Check
                        type="checkbox"
                        id="autoSizingCheck2"
                        label="Keep me updated on more events and news from this event organizer."
                      />
                      <Form.Check
                        type="checkbox"
                        id="autoSizingCheck2"
                        label="Send me emails about the best events happening nearby or online." 
                      />
                      </Row>
                      <Row>
                        <Form.Group
                          required
                          controlId="cell phone">
                          <Form.Label>
                           <strong>cell phone </strong>                          
                          </Form.Label>
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
          <PlaceOrderScreen
            showModal={modalState} 
            closeModal={toggleModal}/>
        </Modal.Footer>
    </Modal>

  </>
  );
} 

export default CheckoutScreen
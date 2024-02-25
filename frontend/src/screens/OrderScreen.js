import {Modal, Row, Col, Container, Button, Card, Form} from 'react-bootstrap'
import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import CheckoutScreen from './CheckoutScreen'
import {selectTickets} from '../actions/ticketActions'

const OrderScreen = (props) =>
{
  const dispatch = useDispatch()

  const [qty, setQty] = useState(0);

  const incrementCounter = () => {
    setQty(qty + 1);
  }
  const decrementCounter = () => {
    if (qty !== 0) {
      setQty(qty - 1);
    }
  }

  const eventDetails = useSelector((state)=> state.eventDetails)
  const {event} = eventDetails

  const [modalState, setModalState] = useState(false)

  const checkoutHandler = () =>{
    dispatch(selectTickets(qty))
    setModalState(!modalState)
  } 
  const toggleModal = () =>{
    setModalState(!modalState)
  } 

  return (
    <>
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
                      <div className="ticket-options mb-1" >
                        <Button onClick={decrementCounter}>
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={checkoutHandler}>
            Check Out
          </Button>
          <CheckoutScreen 
          showModal={modalState} 
          closeModal={toggleModal}
          />
        </Modal.Footer>
     </Modal>
    </>
  );
} 
export default OrderScreen
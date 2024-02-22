import {Modal, Row, Col, Container, Button, Card, Form} from 'react-bootstrap'
import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import CheckoutScreen from './CheckoutScreen'
import {selectTickets} from '../actions/orderActions'

const OrderScreen = (props) =>
{
  const [qty, setQty] = useState(0);

  const incrementCounter = () => {
    setQty(qty + 1);
  }

  const decrementCounter = () => {
    if (qty !== 0) {
      setQty(qty - 1);
    }
  }

  const [modalState, setModalState] = useState(false)

  const toggleModal = () =>{
    setModalState(!modalState)
  } 


  return (
    <>
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
                      <div className="ticket-options" >
                        <Button onClick={incrementCounter}>
                          <i class="fa-sharp fa-solid fa-plus"></i>
                        </Button>
                        <span className="number">{qty}</span>
                        <Button onClick={decrementCounter}>
                          <i class="fa-sharp fa-solid fa-minus"></i>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Col>              
              </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Check Out
          </Button>
          <CheckoutScreen 
          showModal={modalState} 
          closeModal={toggleModal}
          qty = {qty} />
        </Modal.Footer>
     </Modal>
    </>
  );
} 
export default OrderScreen
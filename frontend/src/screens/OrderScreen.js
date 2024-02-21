import {Modal, Row, Col, Container, Button, Card, Form} from 'react-bootstrap'
import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import CheckoutScreen from './CheckoutScreen'

const OrderScreen = (props) =>
{
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  const decrementCounter = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
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
      aria-labelledby="conatained-modal-title-vcenter"
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
                        <h4>General Admission</h4>
                        <div>
                          <strong>$15</strong>              
                        </div>
                        <div>sales end on Mar 9, 2014</div>
                      </Card>
                    </Col>
                    <Col>
                      <div className="ticket-options" >
                        <Button onClick={incrementCounter}>
                          <i class="fa-sharp fa-solid fa-plus"></i>
                        </Button>
                        <span className="number">{counter}</span>
                        <Button onClick={decrementCounter}>
                          <i class="fa-sharp fa-solid fa-minus"></i>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col>
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
          closeModal={toggleModal} />
        </Modal.Footer>
    </Modal>
    </>
  );
} 


export default OrderScreen
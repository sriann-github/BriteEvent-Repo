<<<<<<< HEAD
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

=======
import React, { useEffect } from 'react'
import { Link, useParams,  } from 'react-router-dom'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { getOrderDetails, getPaypalKey, payOrder } from '../actions/orderActions'
import { ORDER_PAY_RESET } from '../constants/orderConstants'

const OrderScreen = () => {
  const dispatch = useDispatch()
  const params = useParams();
  const orderId = params.id

  const orderDetails = useSelector((state)=> state.orderDetails)
  const {order, loading, error} = orderDetails

  const orderPay= useSelector((state)=> state.orderPay)
  const {loading: loadingPay, success: successPay, paypalkey} = orderPay

  useEffect(()=>{
    dispatch(getPaypalKey())

    if (!order || successPay){
      dispatch({type: ORDER_PAY_RESET})
      dispatch(getOrderDetails(orderId))
    }
  },[dispatch, order, successPay, orderId])

  let updatedOrder={}

  if(!loading){
    const addDecimals = (num) => {
      return (Math.round(num*100)/100).toFixed(2)
    }
    updatedOrder.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item)=> acc + item.price * item.qty, 0)
    )
    updatedOrder.totalPrice = (
      Number(updatedOrder.itemsPrice) +
      Number(order.taxPrice)
    ).toFixed(2)
  }
 
  return loading ?(<Loader/>)
  : error ? (<Message variant='danger'>{error}</Message>)
  :(
    <>
    <h1>Order {order._id}</h1>
    <Row>
      
    </Row>
    </>
  )
}
>>>>>>> 09d919de6c3acb139e18d9a0ac81f6b72f476dd9

export default OrderScreen
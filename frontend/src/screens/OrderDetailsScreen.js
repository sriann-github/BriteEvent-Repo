import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {  Row, Col, ListGroup, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { payOrder, getOrderDetails, getPaypalKey,} from '../actions/orderActions';
import { ORDER_PAY_RESET } from '../constants/orderDispatcher';

const OrderDetailsScreen = () => {
  const params = useParams();
  const orderId = params.id
  const dispatch = useDispatch()

  const orderDetails = useSelector((state)=> state.orderDetails)
  const {order, loading, error} = orderDetails

  let updatedOrder={}
  const orderPay= useSelector((state)=> state.orderPay)
  const {loading: loadingPay, success: successPay, paypalkey} = orderPay

  useEffect(() => {
    dispatch(getPaypalKey())

    if (!order || successPay) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch(getOrderDetails(orderId))
    }
  }, [dispatch, orderId, successPay, order])
  
  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }
    updatedOrder.itemsPrice = addDecimals(
      order.orderItems.price*order.orderItems.qty
    )
    updatedOrder.totalPrice = (
      Number(updatedOrder.itemsPrice) +
      Number(order.taxPrice)
    ).toFixed(2)

  return (
    <>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
        <h3 className='ms-3 text-secondary-emphasis'>Order {order._id}</h3>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>
                  <h5>Event</h5>
                  <strong>Name: </strong> 
                  <Link to={`/event/${order.orderItems.event}`}>{order.orderItems.name}</Link>
                </Col>
                <Col md={2} xs={2}>
                  <Image 
                    src={order.orderItems.image} 
                    alt={order.orderItems.image}
                    fluid
                  />
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Account User</h5>
                <strong>Name: </strong> 
                {order.user.name}
                <div>
                  <strong>Email: </strong>{' '}
                  <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Payment Method</h5>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant='success'>Paid on {order.paidAt}</Message>
              ) : (
                <Message variant='danger'>Not Paid</Message>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3} className='mt-5'>
          <ListGroup>
            <ListGroup.Item>
              <h4 className='text-secondary-emphasis mb-3'>Order Summary</h4>
              <Row>
                <Col>{order.orderItems.qty} x General Admission</Col>
                <Col md={3} xs={3}>${updatedOrder.itemsPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Tax</Col>
                <Col md={3} xs={3}>${order.taxPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col><strong>Total</strong></Col>
                <Col md={3} xs={3}><strong>${updatedOrder.totalPrice}</strong></Col>
              </Row>
            </ListGroup.Item>
            {!order.isPaid && (
              <ListGroup.Item>
                {loadingPay && <Loader />}
                  <PayPalScriptProvider options={{ "client-id": 
                  paypalkey,
                  components: "buttons",
                  currency: "USD" }}>
                    <PayPalButtons 
                      className='mt-3'
                      style={{ layout: "horizontal" }}
                      createOrder={(data, actions) => {
                  return actions.order
                      .create({
                          purchase_units: [
                              {amount: {
                                      currency_code: "USD",
                                      value: updatedOrder.totalPrice,
                                  }, // pass the total price to paypal 
                              },
                          ],
                      })
                      .then((orderId) => {
                          return orderId;
                      });
                  }}
              onApprove={function (data, actions) {
                  return actions.order.capture().then(function () {
                      // when payment is approved capture the order, then
                      var paymentResult = {
                        id: data.paymentID,
                        status: 'Paid',
                        update_time: new Date().getDate().toString(),
                        email_address: order.user.email
                      }
                      dispatch(payOrder(orderId, paymentResult))
                  });
              }}
                      />
                  </PayPalScriptProvider>
              </ListGroup.Item>
              )}
            </ListGroup>
        </Col>
      </Row>
    </>
  )
  }
}

export default OrderDetailsScreen
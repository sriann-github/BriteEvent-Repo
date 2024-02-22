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

export default OrderScreen
<<<<<<< HEAD
import { ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST, ORDER_PAY_FAIL, ORDER_PAY_SUCCESS, PAYPAL_KEY  
} from '../constants/orderDispatcher'
import axios from 'axios'
=======
import {
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_FAIL,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_RESET,   
  PAYPAL_KEY  
} from '../constants/orderConstants'
>>>>>>> 09d919de6c3acb139e18d9a0ac81f6b72f476dd9

export const getOrderDetails = (id) => async (dispatch, getState) =>{
try{
  dispatch({
    type: ORDER_DETAILS_REQUEST
  })
  const {userLogin: {userInfo}} = getState(state.userLogin)
    const config = {
      headers:{
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }
  const {data} = await axios.get(`/api/orders/${id}`, config)

  dispatch({
    type: ORDER_DETAILS_SUCCESS,
    payload: data
  })
} catch(error){
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}

export const payOrder = (orderId, paymentResult) => async(dispatch, getState)=>{
  try{
    dispatch({
      type: ORDER_PAY_REQUEST
    })
    const {userLogin: {userInfo}} = getState(state.userLogin)
    const config = {
      headers:{
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.put(`/api/orders/${orderId}/pay`, paymentResult, config)
    dispatch({
      type: ORDER_PAY_SUCCESS,
      payload: data
    })
  }catch (error){
    dispatch({
      type: ORDER_PAY_FAIL,
      payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}

export const getPaypalKey = () => async(dispatch) =>{
  const {data:clientId} = await axios.get('/api/congig/paypal')
  dispatch({
    type: PAYPAL_KEY,
    payload: clientId
  })
}
<<<<<<< HEAD

=======
>>>>>>> 09d919de6c3acb139e18d9a0ac81f6b72f476dd9

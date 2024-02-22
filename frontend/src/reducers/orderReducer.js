<<<<<<< HEAD
import { ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST, ORDER_PAY_FAIL, ORDER_PAY_SUCCESS, ORDER_PAY_RESET,   
  PAYPAL_KEY  } from '../constants/orderConstants'
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

export const orderDetailsReducer = (state={loading:true, orderItems:[]}, action) =>{
  switch(action.type){
    case ORDER_DETAILS_REQUEST:
      return {...state, loading: true}

    case ORDER_DETAILS_SUCCESS:
      return {loading: false, order: action.payload}

    case ORDER_DETAILS_FAIL:
      return {loading: false, error: action.payload}

    default:
      return state
  }
}

export const orderPayReducer = (state={}, action) => {
  switch(action.type){
    case ORDER_PAY_REQUEST:
      return {loading: true}

    case ORDER_PAY_SUCCESS:
      return {loading: false, success: true, order: action.payload}
    
    case ORDER_PAY_FAIL:
      return {loading: false, error: action.payload}

    case ORDER_PAY_RESET:
      return {}

    case PAYPAL_KEY:
      return {loading: false, paypalkey: action.payload}

    default:
      return state
  }
}


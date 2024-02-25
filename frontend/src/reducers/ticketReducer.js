import {SELECT_TICKETS_INIT, SELECT_TICKETS_SUCCESS, CART_SAVE_PAYMENT_METHOD}  from '../constants/ticketDispatcher'

export const ticketReducer = (state = {}, action) => {

  switch(action.type){
    case SELECT_TICKETS_INIT:
      return {
        loading: true,
      }
    case SELECT_TICKETS_SUCCESS:
      return{
        loading: false,
        tickets: action.payload
      }
    case CART_SAVE_PAYMENT_METHOD:
      return{
        ...state,
        paymentMethod: action.payload
      }
    default:
        return state
  }
}

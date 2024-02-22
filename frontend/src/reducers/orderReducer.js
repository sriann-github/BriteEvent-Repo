import {SELECT_TICKETS_INIT, SELECT_TICKETS_SUCCESS}  from '../constants/orderConstants'

const orderReducer = () => (state ={}, action) => {

  switch(action.type){
    case SELECT_TICKETS_INIT:
      return {
        loading: true,
      }
      
      case SELECT_TICKETS_SUCCESS:
        return{
          loading: false,
          order: action.payload
        }

        default:
          return state
  }

}

export default orderReducer


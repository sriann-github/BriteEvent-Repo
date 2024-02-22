import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {eventListReducer, eventDetailsReducer} from './reducers/eventReducer'
import { userDetailsReducer, userReducer, userRegisterReducer, userUpdateProfileReducer } from './reducers/userReducer'
import { orderDetailsReducer, orderPayReducer } from './reducers/orderReducer'
import ticketReducer from './reducers/ticketReducer'

const rootReducer = combineReducers({
  eventsList: eventListReducer,
  eventDetails: eventDetailsReducer,
  userLogin: userReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  ticket: ticketReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
: null

const initialState = {
  userLogin: {userInfo: userInfoFromStorage}
}

const store = configureStore({
  reducer:rootReducer,
  preloadState: initialState
})

export default store
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {eventListReducer, eventDetailsReducer} from './reducers/eventReducer'
import { userDetailsReducer, userReducer, userRegisterReducer, userUpdateProfileReducer } from './reducers/userReducer'
import { orderDetailsReducer, orderPayReducer } from './reducers/orderReducer'
<<<<<<< HEAD
import ticketReducer from './reducers/ticketReducer'
=======
>>>>>>> 09d919de6c3acb139e18d9a0ac81f6b72f476dd9

const rootReducer = combineReducers({
  eventsList: eventListReducer,
  eventDetails: eventDetailsReducer,
  userLogin: userReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
<<<<<<< HEAD
  ticket: ticketReducer,
=======
>>>>>>> 09d919de6c3acb139e18d9a0ac81f6b72f476dd9
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
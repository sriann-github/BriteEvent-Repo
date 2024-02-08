import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {eventListReducer, eventDetailsReducer} from './reducers/eventReducer'
import { userReducer } from './reducers/userReducer'

const rootReducer = combineReducers({
  eventsList: eventListReducer,
  eventDetails: eventDetailsReducer,
  userLogin: userReducer
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
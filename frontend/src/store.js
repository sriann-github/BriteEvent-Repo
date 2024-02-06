import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {eventListReducer, eventDetailsReducer} from './reducers/eventReducer'

const rootReducer = combineReducers({
  eventsList: eventListReducer,
  eventDetails: eventDetailsReducer
})
const store = configureStore({
  reducer:rootReducer,
  preloadState:{}
})

export default store
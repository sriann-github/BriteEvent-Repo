import {configureStore, combineReducers} from '@reduxjs/toolkit'
import eventListReducer from './reducers/eventReducer'

const rootReducer = combineReducers({
  eventsList: eventListReducer
})
const store = configureStore({
  reducer:rootReducer,
  preloadState:{}
})

export default store
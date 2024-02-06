import axios from 'axios'
import {EVENT_LIST_REQUEST_INIT, EVENT_LIST_REQUEST_SUCCESS, EVENT_LIST_REQUEST_ERROR, EVENT_DETAILS_REQUEST_ERROR, EVENT_DETAILS_REQUEST_SUCCESS, EVENT_DETAILS_REQUEST_INIT} from '../constants/eventDispatcher'

export const eventActions = () => async (dispatch) => {  
  try{
    dispatch({
      type: EVENT_LIST_REQUEST_INIT
    })
    const {data} = await axios.get('/api/events')

    dispatch({
      type: EVENT_LIST_REQUEST_SUCCESS,
      payload: data
    })    
  } catch(error)
  {
    dispatch({
      type: EVENT_LIST_REQUEST_ERROR,
      payload: error.response && error.response.data.message? error.response.data.message: error.message
    })
  }
}

export const eventDetailsAction = (id) => async(dispatch) => {
  try{
    dispatch({
      type: EVENT_DETAILS_REQUEST_INIT
    })
    const {data} = await axios.get(`/api/events/${id}`)
    
    dispatch({
      type: EVENT_DETAILS_REQUEST_SUCCESS,
      payload: data
    })
  } catch(error){
    dispatch({
      type: EVENT_DETAILS_REQUEST_ERROR,
      payload:
        error.response && error.response.data.message? error.response.data.message: error.message
    })
  }
}
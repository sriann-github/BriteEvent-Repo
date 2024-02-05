import {EVENT_LIST_REQUEST_INIT, EVENT_LIST_REQUEST_SUCCESS, EVENT_LIST_REQUEST_ERROR} from '../constants/eventDispatcher'

const eventListReducer = (state = {events: []}, action) =>
{
  switch(action.type)
  {
    case EVENT_LIST_REQUEST_INIT:
      return {loading: true, events: []}

    case EVENT_LIST_REQUEST_SUCCESS:
      return {loading: false, events: action.payload}

    case EVENT_LIST_REQUEST_ERROR:
      return {loading: false, error: action.payload}

    default:
      return state
  }
}

export default eventListReducer;
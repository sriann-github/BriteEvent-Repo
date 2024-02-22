import {SELECT_TICKETS_INIT, SELECT_TICKETS_SUCCESS} from '../constants/ticketDispatcher'

export const selectTickets = (qty) => async (dispatch, getState) => {

  dispatch({
    type: SELECT_TICKETS_INIT,     
  })

 // const {data} = await axios.get(`api/event/${id}`)
    const data = getState().eventDetails.event

  dispatch({
    type: SELECT_TICKETS_SUCCESS,
    payload: {
      event: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      qty
    }
  })

  localStorage.setItem('orderItem', JSON.stringify(getState()))
}

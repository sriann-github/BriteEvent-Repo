import React, {useState} from 'react'
import {Button, Card} from 'react-bootstrap'
import { selectTickets } from '../actions/ticketActions';
import {useDispatch} from 'react-redux'

const IncrementDecrementComponent = () => {
  
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch()

  const incrementCounter = () => {
    setQty(qty + 1);
    dispatch(selectTickets(qty))
  }

  const decrementCounter = () => {
    if (qty !== 0) {
      setQty(qty - 1);
    dispatch(selectTickets(qty))

    }
  } 
  
  return (
       <Card>
          <div className="ticket-options" >
            <Button onClick={incrementCounter}>
              <i class="fa-sharp fa-solid fa-plus"></i>
            </Button>
            <span className="number">{qty}</span>
            <Button onClick={decrementCounter}>
              <i class="fa-sharp fa-solid fa-minus"></i>
            </Button>
          </div>
        </Card>
     )
}

export default IncrementDecrementComponent
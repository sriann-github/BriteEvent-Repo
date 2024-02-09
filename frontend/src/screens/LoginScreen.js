import React, {useEffect, useState} from 'react'
import {useLocation, useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { Button, Row, Col, Form } from 'react-bootstrap'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import { login } from '../actions/userActions'
import  {FormContainer}  from '../Components/FormContainer'


const LoginScreen = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  const redirect = location.search? location.search.split('=')[1]: '/'
  const userLogin = useSelector((state) => state.userLogin)
  const {loading, error, userInfo} = userLogin

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect((userLogin) => {
      if (userLogin){
      navigate(redirect)
      } 
    }, [navigate,userInfo, redirect]
  )

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email,password))
  }

  return(
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader/>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange= {(e)=> setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange= {(e)=> setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='Submit' variant='primary'>
          Sign In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
        New Customer?{''}
          <Link to={redirect ? `/register?redirect=${redirect}`: '/register'}> {/* include redirect after registration */}
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}  
export default LoginScreen
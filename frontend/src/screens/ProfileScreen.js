import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { Button, Form } from 'react-bootstrap'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import {FormContainer} from '../Components/FormContainer'
import { getUserDetails, updateProfile } from '../actions/userActions'

const ProfileScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userDetails = useSelector((state) => state.userDetails)
  const {loading, error, user} = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const {success} = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, userInfo, user, navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword){
      setMessage('Passwords do not match')
    } else{
      dispatch(updateProfile({ id: user._id, name, email, password }))
    }
  }
  return (
    <FormContainer>
      <h2 className='mt-3'>Account Information</h2>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {success && <Message variant='success'>Profile Updated</Message>}
      {loading && <Loader/>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'className='mt-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control
          type='text'
          placeholder={user.name}
          value = {name}
          onChange = {(e)=> setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email' className='mt-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control
          type='email'
          placeholder={user.email}
          value = {email}
          onChange = {(e)=> setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password' className='mt-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
          type='password'
          placeholder='Edit password'
          value = {password}
          onChange = {(e)=> setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword' className='mt-3'>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
          type='password'
          placeholder='Confirm password'
          value = {confirmPassword}
          onChange = {(e)=> setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='Submit' variant='primary mt-3'>
          Save Changes
        </Button>
      </Form>
     </FormContainer>
  )
}

export default ProfileScreen
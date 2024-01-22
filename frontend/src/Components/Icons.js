import React from 'react'
import { Card, Row, Col, Container, Button } from 'react-bootstrap'




const Icons = () => {
  return (
    <>
    <Container>
      <Row className='flex-nowrap overflow-x-auto'>
      <Col>
        <Card className='border-0'>
          <Button variant='outline-primary rounded-circle btn-lg stretched-link' href ='/music'><i class="fa-solid fa-music py-4 "></i></Button>
          <Card.Title className='text-center text-primary'>
            <small>Music</small>
          </Card.Title>
        </Card>
      </Col>
      <Col>
        <Card className='border-0'>
          <Button variant='outline-primary rounded-circle btn-lg stretched-link' href ='/nightlife'><i class="fa-solid fa-champagne-glasses py-4 "></i></Button>
          <Card.Title className='text-center text-primary'>
            <small>Nightlife</small>
          </Card.Title>
        </Card>
      </Col>
      <Col>
        <Card className='border-0'>
          <Button variant='outline-primary rounded-circle btn-lg stretched-link' href ='/visualarts'><i class="fa-solid fa-palette py-4 "></i></Button>
          <Card.Title className='text-center text-primary'>
            <small>Visual Arts</small>
          </Card.Title>
        </Card>
      </Col>
      <Col>
        <Card className='border-0'>
          <Button variant='outline-primary rounded-circle btn-lg stretched-link' href ='/holidays'><i class="fa-solid fa-calendar-days py-4 "></i></Button>
          <Card.Title className='text-center text-primary'>
            <small>Holidays</small>
          </Card.Title>
        </Card>
      </Col>
      <Col>
        <Card className='border-0'>
          <Button variant='outline-primary rounded-circle btn-lg stretched-link' href ='/health'><i class="fa-solid fa-stethoscope py-4 "></i></Button>
          <Card.Title className='text-center text-primary'>
            <small>Health</small>
          </Card.Title>
        </Card>
      </Col>
      <Col>
        <Card className='border-0'>
          <Button variant='outline-primary rounded-circle btn-lg stretched-link' href ='/hobbies'><i class="fa-solid fa-puzzle-piece py-4 "></i></Button>
          <Card.Title className='text-center text-primary'>
            <small>Hobbies</small>
          </Card.Title>
        </Card>
      </Col>
      <Col>
        <Card className='border-0'>
          <Button variant='outline-primary rounded-circle btn-lg stretched-link' href ='/business'><i class="fa-solid fa-user-tie py-4 "></i></Button>
          <Card.Title className='text-center text-primary'>
            <small>Business</small>
          </Card.Title>
        </Card>
      </Col>
      <Col>
        <Card className='border-0'>
          <Button variant='outline-primary rounded-circle btn-lg stretched-link' href ='/food&drink'><i class="fa-solid fa-utensils py-4 "></i></Button>
          <Card.Title className='text-center text-primary'>
            <small>Food & Drink</small>
          </Card.Title>
        </Card>
      </Col>
      </Row>
    </Container>
    </>
  )
}


export default Icons
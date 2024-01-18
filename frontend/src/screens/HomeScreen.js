import React from 'react'
import events from '../dummyevents'
import Events from '../Components/Events'
import { Col, Row } from 'react-bootstrap'
import Icons from '../Components/Icons'

const HomeScreen = () => {
  return (
    <>
    <h2>Events in Your Area</h2>
    <Row>
      <Icons></Icons>
    </Row>
    <Row>
      {events.map (e => (
      <Col sm={12} md={6} lg={4} xl={3}>
        <Events event={e} />
      </Col>
      ))
      }
    </Row>
    </>
  )
}

export default HomeScreen
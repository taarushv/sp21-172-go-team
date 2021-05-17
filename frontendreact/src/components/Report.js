import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap';
import NavBarHome from './NavBarHome';
export default class Report extends Component {
    render() {
        return (
            <div>
                <NavBarHome/>
                <h2 style={{paddingLeft: "20px"}}>File A Report</h2>
              <Form style={{paddingLeft: "20px"}}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="john.doe" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Report Type</Form.Label>
    <Form.Control as="select">
    <option>Finding Drinks</option>
      <option>Store Locations</option>
      <option>3</option>
      <option>4</option>
      <option>Other(describe below)</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Please briefly describe what you need help with</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap';
import NavBarHome from './NavBarHome';

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    render() {
        return (
            <div>
                <NavBarHome/>
                <h2 style={{paddingLeft: "20px"}}>Register Below</h2>
                <Form style={{paddingLeft: "20px"}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Enter username" name="username" onChange={this.handleInput} required />
    <Form.Text className="text-muted">
      We'll never share your username with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleInput} required />
  </Form.Group>
  {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button variant="primary" type="submit">
    Submit
  </Button>
  {console.log(this.state.username)}
  {console.log(this.state.password)}
</Form>
            </div>
        )
    }
}

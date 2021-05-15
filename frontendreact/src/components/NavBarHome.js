import React, { Component } from 'react'
import {Navbar, Nav, Button, Form, FormControl, NavDropdown} from 'react-bootstrap';
import starbucksmainlogo from '../components/starbucksmainlogo.png';

export default class NavBarHome extends Component {
    constructor(props){
        super(props);
        this.state={
            clicked: false
        }
    }
    render() {
        return (
            <div>
                <>
 
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">
      <img
        alt=""
        src={starbucksmainlogo}
        width="110"
        height="110"
        className="d-inline-block align-top"
      />{' '}
      
    </Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#menu">Menu</Nav.Link>
      <Nav.Link href="#rewards">Rewards</Nav.Link>
      <Nav.Link href="#giftcards">Gift Cards</Nav.Link>
     
    </Nav>
    <Form inline>

      <Button variant="outline-success">Join Now</Button>
      <Button variant="outline-success">Log In</Button>
    </Form>
  </Navbar.Collapse>
  </Navbar>
</>
            </div>
        )
    }
}

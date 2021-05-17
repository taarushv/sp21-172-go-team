import React, { Component } from 'react'
import {Navbar, Nav, Button, Form, FormControl, NavDropdown} from 'react-bootstrap';
import starbucksmainlogo from '../components/starbucksmainlogo.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
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
        width="150"
        height="120"
        className="d-inline-block align-top"
      />{' '}
      
    </Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/home"><h2>Home</h2></Link></Nav.Link>
      <Nav.Link ><Link to="/payment"><h2>Payment</h2></Link></Nav.Link>
      <Nav.Link ><Link to="/"><h2>Cashier</h2></Link></Nav.Link>
      <Nav.Link ><Link to="/menu"><h2>Menu</h2></Link></Nav.Link>
      <Nav.Link ><Link to="/report"><h2>Need Help?</h2></Link></Nav.Link>
      
     
     
    </Nav>
    <Form inline style={{paddingLeft: "700px"}}>

      <Button  variant="outline-info"><Link to="/register"><h2>Register</h2></Link></Button>
      <Button variant="outline-info"><Link to="/login"><h2>Login</h2></Link></Button>
    </Form>
  </Navbar.Collapse>
  </Navbar>
</>
            </div>
        )
    }
}

import React, { Component } from 'react';
import './BackOffice.css';
import NavBarHome from '../components/NavBarHome';
import {Button} from 'react-bootstrap';
export default class BackOffice extends Component {
    render() {
        return (
            <div>
         <NavBarHome/>
         <div className="first"> 
             <h3 style={{textAlign: "center"}}> We require facial coverings in all stores to protect the health of our customers and partners(employees), and help stop the spread of COVID-19. <a href="https://www.cdc.gov/coronavirus/2019-ncov/your-health/need-to-know.html">Learn more.</a></h3>    
         </div>
         <br></br>
         <div className="second" >
             <p>
        <h3 style={{color: "white", textAlign: "left" , paddingLeft: "10px"}}>Get more of what you love, for free!</h3>
        <br></br>
        <h3 style={{color: "white", textAlign: "left", paddingLeft: "10px"}}>With Starbucks Rewards, say hello to easy ordering,endless choices-and yes, free coffee!*</h3>
        <br></br>
        <Button variant="info" style={{paddingLeft: "10px"}}>Get the App and join!</Button>
        </p>
        
         </div>
            </div>
        )
    }
}

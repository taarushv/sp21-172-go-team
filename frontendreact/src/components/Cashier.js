import React, { Component } from 'react'
import '../components/Cashier.css';
import{ Button} from 'react-bootstrap';
import starbuckslogo from '../components/starbuckslogo.jpeg';


export default class Cashier extends Component {
constructor(props){
    super(props);
    this.state = {
        stores: ''
    }
}
    render()
     {
        return (
            < >
          
                <h1><b>Welcome to Starbucks Reserved!</b></h1>
                <div className="center">
               <h4><u>Starbucks Reserved Order</u></h4> 
               <br></br>
        
        <h5>Drink: Capacchino</h5>
        <h5>Milk : 2%</h5>
        <h5>Size: Venti</h5>
        <h5>Total: 4.29$</h5>
     
        
        <h5>Register: 51959232</h5>
        <h5>Status: Ready for Payment</h5>
        </div>
        <br></br>
        <h3>Select Store: <select name="store" id="store">

        <option value="dub-c">Dub-C</option>
  <option value="saab">Starbucks 1</option>
  <option value="mercedes">Starbucks 2</option>
  <option value="audi">Starbucks 4</option>
    </select>
    </h3>
    <br></br>
   <div className="centerimage">
    <img alt="panda" className="photo" src={starbuckslogo} style={{alignContent: 'center'}} />
    </div><br></br>
    <div className="flex-gap">
    <Button variant="primary">Get Order</Button>{' '}
  <Button variant="success">Place Order</Button>{' '}
<Button variant="danger">Clear Order</Button>{' '}
</div>


   
            </>
        )
    }
}

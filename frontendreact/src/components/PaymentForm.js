import React from 'react';
import Cards from 'react-credit-cards';
import {Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  submitForm (e) {
    e.preventDefault()
    this.props.history.push('/home'); 
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      
      <div id="PaymentForm">
        <h3>Please Enter A Debit or Credit Card</h3>
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <br></br>
        <form style={{textAlign: "center"}} onSubmit={this.submitForm.bind(this)}  >
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          
          <br></br>
          <br></br>
          <input
           type="name"
           name="name"
           placeholder="Name"
           onChange={this.handleInputChange}
           onFocus={this.handleInputFocus}
           />
           <br></br>
           <br></br>
           <input
           type="expiry"
           name="expiry"
           placeholder="Expiry"
           onChange={this.handleInputChange}
           onFocus={this.handleInputFocus}
           />
           <br></br>
           <br></br>
           <input
           type="cvc"
           name="cvc"
           placeholder="CVC"
           onChange={this.handleInputChange}
           onFocus={this.handleInputFocus}
           />
           <br></br>
           <br></br>
           <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}
export default withRouter(PaymentForm);
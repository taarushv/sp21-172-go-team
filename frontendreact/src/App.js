
import './App.css';
import BackOffice from './components/BackOffice';
import Cashier from './components/Cashier';
import NavBarHome from './components/NavBarHome';
import PaymentForm from './components/PaymentForm';
import 'react-credit-cards/es/styles-compiled.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>

      <Route path="/" component={Cashier} exact />
       <Route path="/home" component={BackOffice} />
       <Route path="/payment" component={PaymentForm}/>
             
      </Switch>
  
  
     
    </div>
  );
}

export default App;

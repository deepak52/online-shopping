import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import LoginForm from './components/LoginForm/Login';
import SignUp from './components/SignUp/SignUp';
import Orders from './components/Orders';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App"> 
              <Navbar/>
                <Switch>
                  <Route path="/cart" component={Cart} />
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={LoginForm} />
                  <Route exact path="/signup" component={SignUp} />
                  <Route exact path="/orders" component={Orders} />
                </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}
export default App;

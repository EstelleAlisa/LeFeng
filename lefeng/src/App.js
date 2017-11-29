import React, { Component } from 'react';
import './App.css';
import LoginCom from './Components/LoginCom';
import RegisterCom from './Components/RegisterCom';
import DetailCom from './Components/DetailCom';
import DetailsCom from './Components/DetailsCom';
import CartCom from './Components/CartCom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <div className='real'>
                  <main>
                  <Switch>
                      <Redirect exact from='/' to='/home'/>
                      <Route path='/login' component={LoginCom}/>
                      <Route path='/detail/:did' component={DetailCom}/>
                      <Route path='/cart' component={CartCom}/>
                      <Route path='/details' component={DetailsCom}/>
                      <Route path='/register'  component={RegisterCom}/>

                  </Switch>
                  </main>
              </div>
            </Router>
          
      </div>
    );
  }
}

export default App;

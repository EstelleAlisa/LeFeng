import React, { Component } from 'react';
import './App.css';
import LoginCom from './Components/LoginCom';
import RegisterCom from './Components/RegisterCom';
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

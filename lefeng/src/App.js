import React, { Component } from 'react';
import './App.css';
import LoginCom from './Components/LoginCom';
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
              <LoginCom></LoginCom>                  
          </Router>
          
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import LoginCom from './Components/LoginCom';
import RegisterCom from './Components/RegisterCom';
import ListCom from './Components/ListCom';
import SearchCom from './Components/SearchCom';
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
          <Router  history={this.props.history}>
              <div className='real'>
                  <main>
                  <Switch>
                      <Redirect exact from='/' to='/home'/>
                      <Route path='/home' component={ListCom}/>
                      <Route path='/login' component={LoginCom}/>
                      <Route path='/register'  component={RegisterCom}/>
                      <Route path='/search'  component={SearchCom}/>
                  </Switch>
                  </main>
              </div>
            </Router>          
      </div>
    );
  }
}

export default App;

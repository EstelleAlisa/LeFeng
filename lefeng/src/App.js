import React, { Component } from 'react';
import './App.css';
import './Css/List.css'
import LoginCom from './Components/LoginCom';
import RegisterCom from './Components/RegisterCom';

import DetailCom from './Components/DetailCom';
import DetailsCom from './Components/DetailsCom';
import CartCom from './Components/CartCom';

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
                      <Route path='/detail/:did' component={DetailCom}/>
                      <Route path='/cart' component={CartCom}/>
                      <Route path='/details/:dsid' component={DetailsCom}/>
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

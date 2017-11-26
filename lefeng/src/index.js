import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import reducers from './Reducers/index';
import {Provider} from 'react-redux';

const store = createStore(reducers, {})

function renderPage() {
	ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
}
renderPage();

//注册监听函数
//subscribe订阅
//注册回调，当store改变的时候，会调用这个回调函数
store.subscribe(renderPage);

registerServiceWorker();

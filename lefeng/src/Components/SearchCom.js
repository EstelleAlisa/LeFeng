import React, { Component } from 'react';
import '../Css/Search.css';
import {connect} from 'react-redux';
import {Carousel } from 'antd';
import { BackTop } from 'antd';
import {createBrowserHistory} from 'history'
import '../Css/antd.css';
import {
  	BrowserRouter as Router,
  	Route,
	Switch,
	Redirect,
  	Link
} from 'react-router-dom';
import Hot from './HotCom'
import SearchList from './SearchListCom'
import ShopList from './ShopListCom'

class SearchUI extends Component{
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			val: ''
		}
		
	}
	componentDidMount() {
		this.history = createBrowserHistory({
        	basename: '', // 基链接
        	forceRefresh: false, // 是否强制刷新整个页面
        	keyLength: 6, // location.key的长度
        	getUserConfirmation: (message, callback) => callback(window.confirm(message)) // 跳转拦截函数
    	})
		if(this.state.val){
			this.history.push('/search/searchlist/' + this.state.val);
		}else {
			this.history.push('/search/hot/');
		}
	}
	handleChange(e) { 
		var value = e.target.value; 
		var error = ""; 
		if(value.length < 1) {

		} else{
			// console.log(value)
		}
		this.setState({
			val: value
		})
	}
	render() {
		var props = this.props;
		var match = this.props.match;
		return(

			<div className='search'>
				<div className='top'>
					
						<input type='text' placeholder='自然堂' value={this.state.val} onChange={this.handleChange}/>
					
					<Link to={`${match.url}/shoplist/${this.state.val}`} className='sss'>
						<h2 onClick={() =>{props.checkVal(this.state.val)}}>
							搜索
						</h2>
					</Link>
					<Link to='/home'>
						<i className="iconfont">&#xe63a;</i>
					</Link>
				</div>
				<Switch>
		        <Redirect exact from={`${match.url}/`} to={`${match.url}/hot`}/>

		        <Route path={`${match.url}/hot`} component={Hot}/>
		        <Route path={`${match.url}/searchlist/:value`} component={SearchList}/>
		        <Route path={`${match.url}/shoplist/:value`} component={ShopList}/>
		      </Switch>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		newVal: state.newVal
	}
}
const mapDispatchToProps = (dispatch) => {
	return{
		checkVal: function(data) {
			dispatch({
				type:'CHECK_HISTORY',
				payload:data
			})
		}
	}
}

const Search = connect(mapStateToProps, mapDispatchToProps)(SearchUI);
export default Search;
import React, { Component } from 'react';
import '../Css/Search.css';
import {connect} from 'react-redux';
import {Carousel } from 'antd';
import { BackTop } from 'antd';
import { browserHistory } from 'react-router'
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
		
		
	}
	handleChange(e) { 
		var value = e.target.value; 
		var error = ""; 
		if(value.length < 1) {
		 	error = "介绍不能少于十个字";
		 	alert('aaa')
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
					<Link to={`${match.url}/shoplist/`+ 5} className='sss'>
						<h2 onClick={() =>{props.checkVal()}}>
							搜索
						</h2>
					</Link>
					<Link to='/home'>
						<i class="iconfont">&#xe63a;</i>
					</Link>
				</div>
				<Switch>
		        <Redirect exact from={`${match.url}/`} to={`${match.url}/hot`}/>

		        <Route path={`${match.url}/hot`} component={Hot}/>
		        <Route path={`${match.url}/searchlist`} component={SearchList}/>
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
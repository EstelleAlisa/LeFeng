import React, { Component } from 'react';
import '../Css/List.css';
import axios from 'axios';
import {
  Link
} from 'react-router-dom'


class Footer extends Component{
	constructor() {
    super(); 
    this.state={
    	iflogindata:'',
    	zhuxiao:'',
    	login:'',
    	register:''
    	
    }
  }
  componentDidMount() {
  		this.iflogin()
  }
  iflogin(){
  	var that=this;
		axios.get('/users/iflogin')
		.then(function(res){
			console.log(res)
			if(res.data.code!=1){
				that.setState({
					login:'登录',
					register:'注册',
					usern:'',
    				zhuxiao:''
				})

			}else{
				that.setState({
					usern:res.data.message,
					zhuxiao:'退出',
					login:'',
					register:'',

				})

			}
		})
  }

  logout(){
  	axios.get('/users/dellogin')
  	.then(function(res){
  		console.log(res)
  	})
  }
	render() {
		var match = this.props.match;
		return(
			<div className='footer'>
		<div className='foot'>
			<div className='left'>
				<Link to='./home'>首页</Link>
				<Link to='./cart'>购物车</Link>
				<Link to='./custorm'>客户端</Link>
			</div>
			<div className='right'>
				<a href="javascript:;">{this.state.usern}</a>
				<a href="javascript:;" onClick={this.logout}>{this.state.zhuxiao}</a>
				<Link to='./login'>{this.state.login}</Link>
				<Link to='./register'>{this.state.register}</Link>
				
			</div>
		</div>
		<p className='pFoot'>
			联系客服
			<span className='sFoot'>400-000-1818</span>
		</p>
		<p className='pFoot2'>Copyright © 2008-2017 Lefeng.com All Rights Reserved</p>
	</div>
		)
	}
}

export default Footer;
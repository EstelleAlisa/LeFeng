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
    	zhuxiao:''
    	
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
					iflogindata:'登录',
					zhuxiao:'注册'
				})

			}else{
				that.setState({
					iflogindata:res.data.message,
					zhuxiao:'退出'
				})

			}
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
				<Link to='./login'>{this.state.iflogindata}</Link>
				<Link to='./register'>{this.state.zhuxiao}</Link>
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
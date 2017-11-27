import React, {Component} from 'react';
import axios from 'axios';
import {
  Link
} from 'react-router-dom'
import '../Css/Register.css'

class RegisterUI extends Component{
	componentDidMount() {
		
	}
	register(){
		alert('dfkk')
	}
	render() {
		var props = this.props;
		return(
			<div className='register'>
				<div className='top'>
					<Link to='/login'><i class="iconfont">&#xe608;</i></Link>
					<h2>注册</h2>
					<span><i class="iconfont"></i></span>
				</div>
				<div className='bottom'>
					 	<input type='text' placeholder='已验证手机/用户名' className='i1 l'/><br/>
						<button className='l reg'>获取验证码</button><br/>
						<input type='text' placeholder='请输入短信验证码' className='i2' /><br/>	
						<input type='password' placeholder='请输入密码' className='i2' /><br/>
						<button className='regi' onClick={this.register}>注册</button>
				</div>
			</div>
		)
	}
}

export default RegisterUI;
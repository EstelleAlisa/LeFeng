import React, {Component} from 'react';
import axios from 'axios';
import {createBrowserHistory} from 'history'
import {
  Link
} from 'react-router-dom'
import '../Css/Login.css'

class LoginUI extends Component{
	componentDidMount() {
		
	}
	login(){
		var history = createBrowserHistory({
		            basename: '', // 基链接
		            forceRefresh: true, // 是否强制刷新整个页面
		            keyLength: 6, // location.key的长度
		            getUserConfirmation: (message,callback) => callback(window.confirm(message)) // 跳转拦截函数
		 })
    
		axios.post('/users/login',{
			username:document.querySelector('#username').value,
			psw:document.querySelector('#psw').value
		})
		.then(function(res){
			console.log(res)
			if(res.data.code==1){
				history.push('/home')
			}
			else{
				alert('登录失败')
			}
		})
	}
	render() {
		var flag = true; //表示是否需要一个月内的登录
		var props = this.props;
		return(
			<div className='login'>
				<div className='top'>
					<Link to='/home'><i className="iconfont">&#xe608;</i></Link>
					<h2>登录</h2>
					<Link to='/home'><i className="iconfont">&#xe63a;</i></Link>
				</div>
				<div className='bottom'>
					<input type='text' id="username" placeholder='已验证手机/用户名' className='i1'/><br/>
					<input type='password' id="psw" placeholder='密码' className='i1' /><br/>
					<p className='p1'>
						<span className='s1 l'>√</span>
						<span className='s2 l'>一个月内免登录</span><br/>
					</p>
					<button onClick={this.login}>登录</button>
					<div className='other'>
						<p className='r'>
							<Link to='/register' className='l'>立即注册</Link>
							<Link to='/forget' className='l'>忘记密码</Link>
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default LoginUI;
import React, { Component } from 'react';
import '../Css/List.css';
import {
  Link
} from 'react-router-dom'


class Footer extends Component{
	render() {
		var match = this.props.match;
		return(
			<div className='footer'>
		<div className='foot'>
			<div className='left'>
				<Link to='./home'>首页</Link>
				<Link to='./carts'>购物车</Link>
				<Link to='./custorm'>客户端</Link>
			</div>
			<div className='right'>
				<Link to='./login'>登录</Link>
				<Link to='./register'>注册</Link>
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
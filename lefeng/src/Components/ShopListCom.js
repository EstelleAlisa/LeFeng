import React, { Component } from 'react';
import '../Css/ShopList.css';
import {connect} from 'react-redux';
import {Carousel } from 'antd';
import { BackTop } from 'antd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../Css/antd.css';
import {
  	BrowserRouter as Router,
  	Route,
	Switch,
	Redirect,
  	Link
} from 'react-router-dom';
import axios from 'axios';
import PriceCom from './PriceCom'
import NumberCom from './NumberCom'
import ShopCom from './ShopCom'
import FooterCom from './FooterCom'

class ShopListUI extends React.Component{
	constructor(){
		super();
		this.select=this.select.bind(this);
		this.del=this.del.bind(this)
		this.state={
			Flag:false
		}
	}
	componentDidMount() {
		this.props.getShopList();
	}
	select(){
		this.setState({
			Flag:true
		})
	}
	del(){
		this.setState({
			Flag:false
		})
	}
	render() {
		var props = this.props;
		var selects=<div className="select_in" >
						<div className="select_top">
							<span className="de" onClick={this.del}>取消</span>
							<span className='selector'>筛选</span>
						</div>
					<div className="select_center">
						<h4>分类</h4>
						<ul>
							<li>全部</li>
							{
								props.shopList.map((item, index) => {
									return <li key={index}>{item.thirdCatName}</li>
								})
							}
						</ul>
					</div>
					<div className="select_bottom">确定</div>
			    </div> ;
			    if(!this.state.Flag){
			        selects=null;
			       }

		var match = this.props.match;
		return(
			<div className='shoplist'>
				<nav>
					<Link to={`${match.url}/price`}>
						<div className='price same'>
							<span className='shopSim'>价格</span>
						</div>
					</Link>
					<Link to={`${match.url}/number`}>
						<div className='number same'>
							<span className='shopSim'>销量</span>
						</div>
					</Link>
					<div className='select same'>
						<span className='shopSim' onClick={this.select}>筛选</span>
					</div>
				</nav>
				<Switch>
				    <Redirect exact from={`${match.url}/`} to={`${match.url}/shop`}/>
				    <Route path={`${match.url}/shop`} component={ShopCom}/>
				    <Route path={`${match.url}/price`} component={PriceCom}/>
				    <Route path={`${match.url}/number`} component={NumberCom}/>
			    </Switch>
			    <FooterCom></FooterCom>
				<ReactCSSTransitionGroup
			    	transitionName="amit"
			    	transitionEnterTimeout={500}
			    	transitionLeaveTimeout={600}>
			    {selects}    
				</ReactCSSTransitionGroup>


			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		shopList: state.shopList
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getShopList: function() {
			axios.get('/api/neptune/goods/get_thirdcat_size/v1?keyword=%E6%8A%A4%E8%82%A4%E5%A5%97%E8%A3%85')
			.then(function(res) {
				console.log('aaa');
				console.log(res);
				var shopList = res.data.data;
				console.log('bbb');
				dispatch({
					type:'GET_SHOPLIST',
					payload: shopList
				})
			})
		}
	}
}
const ShopList = connect(mapStateToProps, mapDispatchToProps)(ShopListUI);
export default ShopList;
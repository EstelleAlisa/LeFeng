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
		this.didSelect=this.didSelect.bind(this)
		this.state={
			Flag:false,
			nowVlue: ''
		}
	}
	componentDidMount() {
		if(this.props.shopList.length == 0){
			this.props.getShopList(this.props.match.params.value);
		}
		
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
	didSelect(index) {
		var realVal = this.props.shopList[index].thirdCatName;
		this.setState({
			nowVlue: realVal
		})
		this.props.getShopList(this.state.nowVlue);
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
						<ul className='needSel'>
							<li>全部</li>
							{
								props.shopList.map((item, index) => {
									return(
										<li key={index} onClick={() => {this.didSelect(index)}}>
											{item.thirdCatName}
										</li>	
									) 
								})
							}
						</ul>
					</div>
					<Link to={`${props.match.url}/shop/${this.state.nowVlue}`}>
						<div className="select_bottom" onClick={this.del}>
							确定
						</div>
					</Link>
			    </div> ;
			    if(!this.state.Flag){
			        selects=null;
			       }

		var match = this.props.match;
		return(
			<Router>
			<div className='shoplist'>
				<nav>
					<Link to={`${match.url}/price/${match.params.value}`}>
						<div className='price same'>
							<span className='shopSim'>价格</span>
						</div>
					</Link>
					<Link to={`${match.url}/number/${match.params.value}`}>
						<div className='number same'>
							<span className='shopSim'>销量</span>
						</div>
					</Link>
					<div className='select same'>
						<span className='shopSim' onClick={this.select}>筛选</span>
					</div>
				</nav>
				<Switch>
				    <Redirect exact from={`${match.url}/`} to={`${match.url}/shop/${match.params.value}`}/>
				    <Route path={`${match.url}/shop/:value`} component={ShopCom}/>
				    <Route path={`${match.url}/price/:value`} component={PriceCom}/>
				    <Route path={`${match.url}/number/:value`} component={NumberCom}/>
			    </Switch>
			    <FooterCom></FooterCom>
				<ReactCSSTransitionGroup
			    	transitionName="amit"
			    	transitionEnterTimeout={500}
			    	transitionLeaveTimeout={600}>
			    {selects}    
				</ReactCSSTransitionGroup>
			</div>
			</Router>
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
		getShopList: function(newData) {
			axios.get('/api/neptune/goods/get_thirdcat_size/v1?keyword=' + newData)
			.then(function(res) {
				console.log('yyy');
				console.log(res);
				var shopList = res.data.data;
				console.log('lll');
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
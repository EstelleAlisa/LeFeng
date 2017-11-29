import React from 'react';
import axios from 'axios';
import "../Css/details.css";
import Dprice from './Dprice';
import Dnumber from './Dnumber';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {connect} from 'react-redux'
import {
  Link,
  NavLink,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

class DetailsComUI extends React.Component{
	constructor(){
		super();
		this.select=this.select.bind(this);
		this.del=this.del.bind(this)
		this.state={
			Flag:false
		}
	}
	componentDidMount() {
		this.props.getdetailsData(this.props.match.params.dsid)
		this.props.getSize(this.props.match.params.dsid)
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
	render(){
		var props=this.props.detailsData;
		var props_s=this.props;
		var selects=<div className="select_in" >
					<div className="select_top">
						<span className="de" onClick={this.del}>取消</span>
						<span>筛选</span>
					</div>
					<div className="select_center">
						<h4>分类</h4>
						<ul>
							<li>fg</li>
							<li>fg</li>
							<li>fg</li>
							<li>fg</li>
							<li>fg</li>
							<li>fg</li>
						</ul>
					</div>
					<div className="select_bottom">确定</div>
			    </div> ;
			    if(!this.state.Flag){
			        selects=null;
			       

			       }

		return (
			<div className="details">
				<div className='top'>
					<Link to='/home'><i class="iconfont">&#xe608;</i></Link>
					<h2>{props.name}</h2>
					<Link to='/home'><i class="iconfont">&#xe63a;</i></Link>
				</div>
				<div className="pic">
					<img src={props.brandImage}/>
				</div>
				<div className="nine">jdsfhksjgiejsngkknvk</div>
				<div className="navs">
					<ul>
						<li className="l">
							<NavLink activeClassName="active" to={`${props_s.match.url}/price`}>
								价格
							</NavLink>
						</li>
						<li className="l">
							<NavLink activeClassName="active" to={`${props_s.match.url}/number`}>
								销量
							</NavLink>
						</li>
						<li className="l select" onClick={this.select}>帅选</li>
					</ul>
				</div>
				 <Switch>
				  	<Redirect exact from={`${props_s.match.url}/`} to={`${props_s.match.url}/number`}/>
			        <Route path={`${props_s.match.url}/price`} component={Dprice}/>
			        <Route path={`${props_s.match.url}/number`} component={Dnumber}/>
			      </Switch>
			      
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


const mapStateToProps=(state)=>{
    return {
		detailsData:state.detailsData
    }
 }

 const mapDispatchToProps=(dispatch)=>{
  return {
		getdetailsData:function(data){
			axios.get('/api/neptune/brand/details/v1?brandId='+data)
			.then(function(res){
				console.log(res)
				dispatch({
					type:"EEE",
					payload:res.data.data
				})
			})
		},
		getSize:function(data){
			axios.get('/api/neptune/goods/get_thirdcat_size/v1?brandId='+data)
			.then(function(res){
				console.log(res)
			})
		}
		
  }
 }

const DetailsCom=connect(mapStateToProps,mapDispatchToProps)(DetailsComUI)
export default DetailsCom;
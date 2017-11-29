import React from 'react';
import axios from 'axios';
import '../Css/cart.css';
import {
  Link
} from 'react-router-dom'

class CartCom extends React.Component{
	constructor() {
    super(); 
    this.state={
    	cartdata:[],
    	carteddata:[]
    }
  }
  componentDidMount() {
  	this.getcart();
  	this.getcarted();
  }
  getcarts(id){
  	console.log('aaa')
		axios.post('/users/getadd',{
			id:id
		})
		.then(function(res){
			console.log(res)
		})
  }
  
  getcart(){
  	var that=this;
		axios.post('/users/add')
		.then(function(res){
			console.log(res)
			that.setState({
				cartdata:res.data
			})

		})
  }
  
  deleting(id){ 
  		console.log('bbb')
  	axios.post('users/del',{
  		id:id
  	})
  	.then(function(res){
  		console.log(res) 		
  	});
 		 	
  }
  getcarted(){
  		var that=this;
  	axios.post('/users/added')
		.then(function(res){
			console.log(res)
			that.setState({
				carteddata:res.data
			})

		})
  }
  deleted(id){
  		console.log('ccc')
  	axios.post('users/deled',{
  		id:id
  	})
  	.then(function(res){
  		console.log(res)
  	})
  }


	render(){
		var mepty=<div className="empty">
						<p><i class="icon iconfont">&#xe502;</i></p>
						<p>购物车为空哦！</p>
						<p>赶紧抢点东西犒劳自己吧~</p>
						<p><Link to="/home"><span>去首页逛逛</span></Link></p>
					</div>
					if(this.state.cartdata.length!==0){
							mepty=null;
					};
					

		return (
			<div className="cartcom">
				<div className='top'>
					<Link to="/home"><i class="iconfont">&#xe608;</i></Link>
					<h2>购物车</h2>
					<i></i>
				</div>
				<div className="cart_center">
					{mepty}
					
					
					{
						this.state.cartdata.map((item,index)=>{
							return(
								<ul key={index}>
									<li>{item.brandName}</li>
									<li className="list_2">
										<p><span className="redd">减慢</span>joidfjoidsjgiofvdg</p>
									</li>
									<li className="list_3">
										<aside className="pic l">
											<img src={item.pic}/>
										</aside>
										<aside className="det l">
											<p className="p1">{item.product_name}</p>
											<p>￥{item.price}</p>
											<p>
												<span>-</span>
												<span>1</span>
												<span>+</span>
												<button  className="r" onClick={()=>this.deleting(item._id)}>X</button>
											</p>
										</aside>
									</li>
									<li className="list_4">
										<p>
											<span className="l">商品合计</span><span className="r">￥</span>
										</p>
									</li>
									<li  className="list_5">
										<p><span className="redd">减慢</span>kjsfi金块三地警方及</p>
										<p><span className="redd">减慢</span>kjsfi金块三地警方及</p>
									</li>
								</ul>
							)
						})
					}


				</div>
				<div className="cheat">
					<span className="l">使用优惠卷</span>
					<span className="r">></span>
				</div>
				<div className="cart_bottom">
					<h3>还有购抢机会</h3>
					{
						this.state.carteddata.map((item,index)=>{
							return(
								<ul key={index}>
									<li className="list_3">
										<aside className="pic l">
										<img src={item.pic}/>
										</aside>
										<aside className="det l">
											<p className="p1">{item.product_name}</p>
											<p>￥{item.price}</p>
											<p>
												<span className="have" onClick={()=>this.getcarts(item._id)}>重新购抢</span>
												<button  className="r" onClick={()=>this.deleted(item._id)}>X</button>
											</p>
										</aside>
									</li>
								</ul>

							)
						})
					}
					
				</div>


				<div className="clearing">
					<div className="left l">待支付：<span></span></div>
					<div className="right l">结算</div>
				</div>


			</div>

		)
	}
}
export default CartCom;
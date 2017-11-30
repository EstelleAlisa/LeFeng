import React from 'react';
import axios from 'axios';
import '../Css/cart.css';
import {createBrowserHistory} from 'history'
import {
  Link
} from 'react-router-dom'

class CartCom extends React.Component{
	constructor() {
    super(); 
    this.state={
    	cartdata:[],
    	product_count:'',
    	carteddata:[],
    	uselogin:'',
    	gong:[]
    }
  }
  iflogin(){    
  	var that=this;
		axios.get('/users/iflogin')
		.then(function(res){
			console.log(res)
			if(res.data.code!=1){
				that.setState({
					uselogin:'',
				})

			}else{
				that.setState({
					uselogin:res.data.message,
				})

			}
		})
  }
  componentDidMount() {
  	this.getcart();
  	this.getcarted();
  	this.iflogin()
  }
 
  getcarts(id){
  	var history = createBrowserHistory({
            basename: '', // 基链接
            forceRefresh: true, // 是否强制刷新整个页面
            keyLength: 6, // location.key的长度
            getUserConfirmation: (message,callback) => callback(window.confirm(message)) // 跳转拦截函数
        })
  	console.log('aaa')
		axios.post('/users/getadd',{
			id:id
		})
		.then(function(res){
			console.log(res)
			if(res.data.code==1){
				history.push('/cart')
			}
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
	var history = createBrowserHistory({
            basename: '', // 基链接
            forceRefresh: true, // 是否强制刷新整个页面
            keyLength: 6, // location.key的长度
            getUserConfirmation: (message,callback) => callback(window.confirm(message)) // 跳转拦截函数
        })
  		console.log('bbb')
	  	axios.post('users/del',{
	  		id:id
	  	})
	  	.then(function(res){
	  		console.log(res)
	  		if(res.data.code==1){
	  			history.push('/cart')	
	  		}
	  				
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
  	var history = createBrowserHistory({
            basename: '', // 基链接
            forceRefresh: true, // 是否强制刷新整个页面
            keyLength: 6, // location.key的长度
            getUserConfirmation: (message,callback) => callback(window.confirm(message)) // 跳转拦截函数
        })
  		console.log('ccc')
  	axios.post('users/deled',{
  		id:id
  	})
  	.then(function(res){
  		console.log(res)
  		if(res.data.code==1){
  			history.push('/cart')
  		}
  	})
  }
	
  productdel(index){
		var ccc=this.state.cartdata[index];
  		var aaa=ccc.product_count--
		if(aaa<=1){			
			this.setState({
			product_count:1
			})
			return;
		}
		this.setState({
			product_count:aaa
		})
  }
  productadd(index){
  	var ccc=this.state.cartdata[index];
  	var aaa=ccc.product_count++
	console.log(aaa)
		this.setState({
			product_count:aaa
		})
  }



	render(){
		var mepty=<div className="empty">
						<p><i className="icon iconfont">&#xe502;</i></p>
						<p>购物车为空哦！</p>
						<p>赶紧抢点东西犒劳自己吧~</p>
						<p><Link to="/home"><span>去首页逛逛</span></Link></p>
					</div>
					if(this.state.cartdata.length!==0){
						console.log(this.state.cartdata.length)
						var ts=0
						for(var i=0;i<this.state.cartdata.length;i++){
							var ft=this.state.cartdata[i]
							ts+=ft.price*ft.product_count
						}
						console.log(ts)
						var toddo=ts
							mepty=null;
						}
					

		return (
			<div className="cartcom">
				<div className='top'>
					<Link to="/home"><i className="iconfont">&#xe608;</i></Link>
					<h2>购物车</h2>
					<span className="usernn">{this.state.uselogin}</span>
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
												<span onClick={()=>this.productdel(index)}>-</span>
												<span>{item.product_count}</span>
												<span onClick={()=>this.productadd(index)}>+</span>
												<button  className="r" onClick={()=>this.deleting(item._id)}>X</button>
											</p>
										</aside>
									</li>
									<li className="list_4">
										<p>
											<span className="l">商品合计</span><span className="r">￥<span className="totle">{item.price*item.product_count}</span></span>
										</p>
									</li>
									<li  className="list_5">
										<p><span className="redd">减满</span>直接电话回复</p>
										<p><span className="redd">减满</span>瑞合法科技型初创</p>
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
					<div className="left l">待支付：￥<span>{ts}</span></div>
					<div className="right l">结算</div>
				</div>


			</div>

		)
	}
}
export default CartCom;
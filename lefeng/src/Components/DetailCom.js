import React from 'react';
import axios from 'axios';
import "../Css/detail.css";
import {connect} from 'react-redux'
import {
  Link
} from 'react-router-dom'

class DetailComUI extends React.Component{
	componentDidMount() {
		this.props.getdetail(this.props.match.params.did)
		this.props.getdetailS(this.props.match.params.did)
		this.props.getpmsList(this.props.match.params.did)
		// this.props.getallImages(this.props.match.params.did)
		this.props.	getbuy()
		this.props.	getbuy_1()
		this.props.	getbuy_2()
	}
	information(){
  		document.querySelector(".information_1").style.display='block';
  		document.querySelector(".instruction_1").style.display='none';
  		
  	}
  	instruction(){
		document.querySelector(".information_1").style.display='none';
  		document.querySelector(".instruction_1").style.display='block';
  	}
	save(){
			axios.post('/users/save',{
			product_name:document.querySelector('.top h2').innerHTML,
			product_count:1,
			price:document.querySelector('.pricenow span').innerHTML,
			pic:document.querySelector('.bigpic img').src,
			brandName:document.querySelector('.brandName').innerHTML,

		})
		.then(function(res){
			console.log(res)
		})
	}
	render(){
		var props_1=this.props.detailData;
		
		var props_2=this.props.buyData;
		var props_3=this.props.buyData_1;
		var props_4=this.props.buyData_2;
		var props_5=this.props.descrip;
		var props_6=this.props.pmsList;
		return (
			<div className="detail">
				<div className='top'>
					
					<Link to={"/home"}><i className="iconfont">&#xe608;</i></Link>
					<h2>{props_1.name}</h2>
					<Link to='/home'><i className="iconfont">&#xe63a;</i></Link>
				</div>
				<div className="bigpic">
					<img src={props_1.middleImage}/>
				</div>
				
				<div className="introduce">
					<p className="p1">
						<span className="globa">蜂购全球</span>
						<span style={{fontSize:'14px'}}>{props_1.name}</span>
						<span></span>
					</p>
					<p className="p2">
						<span className="pricenow">￥<span>{props_1.vipshopPrice}</span></span>
						<span className="priceold">{props_1.marketPrice}</span>
						<span className="brandName" style={{display:"none"}}>{props_1.brandName}</span>
					</p>
				</div>
				<div className="man">
					{
						props_6.map((item,index)=>{
							return(
								
									<p key={index}>
										<span>{item.type}</span>
										{item.msg}
									</p>
								
							)
						})
					}
				</div>
				<div className="appraise">
					<ul>
						<li className="list_1">
							<span>商品评价（133）</span>
							<span className="r">好评</span>
							<span className="agree r">85%</span>

						</li>
						<li>
							<p>
								<span className="agree">满意</span>

								<span className="r">2017-5-3</span>
								<span className="r padd">123****456</span>
							</p>
							<p>对方的老师根据法国</p>

						</li>
						<li>
							<p>
								<span className="agree">满意</span>
								<span className="r">2017-5-3</span>
								<span className="r padd">123****456</span>
							</p>
							<p>对方的老师根据法国</p>
						</li>
						<li>
							<p>
								<span className="agree">满意</span>
								<span className="r">2017-5-3</span>
								<span className="r padd">123****456</span>

							</p>
							<p>对方的老师根据法国</p>
						</li>
					</ul>
				</div>
				<div className="childpostion">
					<div className="l information" onClick={this.information}>商品信息</div>
					<div className="l instruction" onClick={this.instruction}>购物说明</div>
				</div>
				<div className="information_1">

					<div className="top_1">
						<div className="posto"></div>
						<p><span>该商品均在国外采购</span></p>
						<p>
							<span>预计送达时间：</span>
							<span>{props_1.expectDeliveryData}</span>
						</p>
					</div>
					<table>
						<tbody>
							{
								props_5.map((item,index)=>{
									return (
										<tr key={index}>
											<th>{item.name}</th>
											<td>{item.value}</td>
										</tr>
									)
								})
							}
						
							
						</tbody>
					</table>
					<div className="lookpic" onClick={()=>{this.props.getallImages(this.props.match.params.did)}}>点击查看图文详情</div>
					<div  className="allimages">
						{
						this.props.allImages.map((item,index)=>{
							return (
								
									<img src={item} key={index}/>
								
							)
						})
					}
					</div>
					
				</div>
				<div className="instruction_1">
					<ul>
						<li>
							<h3>关于商品</h3>
							<p>乐蜂网上所售卖的商品均经过品牌授权，确保正品，并由中国人民财产保险股份有限公司为您购买的每一件商品进行承保。</p>
						</li>
						<li>
							<h3>商品价格说明</h3>
							<p>乐蜂展示的中间未划横线价格（显示如¥799）为乐蜂销售价，该价格是交易成交价，是您最终决定是否购买商品的依据。</p>
							<p>乐蜂展示的中间划横线价格（显示如￥1399）为参考价，采集自品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价可能会与您购物时展示的不一致。该价格仅供您参考。</p>
							<p>折扣比为乐蜂销售价与参考价的对比（该值四舍五入后采用小数点后1位，如¥799/¥2899=0.2756=2.8折），该对比值仅供您参考，不作为结算基数。</p>
						</li>
						<li>
							<h3>售后说明</h3>
							<p>在您签收商品之日起的7天之内，乐蜂为您提供七天无理由放心退服务，但以下情形将不能退货：</p>
							<p>1、非乐蜂销售的商品，或有明显使用痕迹影响二次销售的商品；</p>
							<p>2、法律明确规定不适用七天无理由退货的商品；</p>
							<p>3、基于安全及健康的考虑，已拆封的食品、药品、保健品、化妆品、贴身用品等；</p>
							<p>4、已经激活的手机、电脑、数码产品等；</p>
							<p>5、已在线交付的充值类商品；</p>
							<p>6、未经授权的维修、误用、碰撞、疏忽、滥用、进液、事故、改动、不正确的安装所造成的商品质量问题，或撕毁、涂改标贴、机器序号、防伪标记；</p>
							<p>7、无法提供商品的发票（如已索要发票）、保修卡等三包凭证或者三包凭证信息与商品不符及被涂改的；</p>
							<p>8、礼包或套装中的商品不可以部分退换货。上述退货规则，客户一经购买，视为认可。</p>
						</li>
						<li>
							<h3>尊敬的客户：</h3>
							<p>为帮助您更好地选购境外商品，请您在购买前务必认真、详细阅读并完全理解本告知书的全部内容，并对自身风险承担做出客观判断。同意本告知书内容后再下单购买：</p>
							<p>1. 您在本（公司）网站购买的境外商品等同于原产地直接销售商品，因此商品本身可能无中文标签，如果需要您可以通过网站查看相关商品标签中文翻译或联系客服。</p>
							<p>2. 根据相关法律政策，您选购的境外商品仅限于个人自用，不得进行再次销售。</p>
							<p>3.您购买的境外商品符合原产地有关品质、健康、标识的相关标准，与我国产品标准或有所不同，由此可能造成的危害、损失或者其他风险，本（公司）网站不承担责任！</p>
							<p>谢谢！</p>

						</li>

					</ul>
				</div>
				<div className="buy">浏览本商品的用户还买了</div>
				<div className="like">
					{
						props_2.map((item,index)=>{
							return (
								<dl key={index}>
									<dt>
										<Link to={'/detail/'+item.goods.gid}>
										    <img src={item.goods.image}/>
										</Link>
									</dt>
									<dd>
										<span className="l">{item.goods.brandStoreName}</span>
										<span className="r">{item.goods.productName}</span>
									</dd>
								</dl>
							)
						})
					}
					{
						props_3.map((item,index)=>{
							return (
								<dl key={index}>
									<dt>
										<Link to={'/detail/'+item.goods.gid}>
										    <img src={item.goods.image}/>
										</Link>
									</dt>
									<dd>
										<span className="l">{item.goods.brandStoreName}</span>
										<span className="r">{item.goods.productName}</span>
									</dd>
								</dl>
							)
						})
					}
					{
						props_4.map((item,index)=>{
							return (
								<dl key={index}>
									<dt>
										<Link to={'/detail/'+item.goods.gid}>
										    <img src={item.goods.image}/>
										</Link>
									</dt>
									<dd>
										<span className="l">{item.goods.brandStoreName}</span>
										<span className="r">{item.goods.productName}</span>
									</dd>
								</dl>
							)
						})
					}
					
					
				</div>
				<div className="addcart">
					<Link to="/cart">
						<span className="left">
						   <i className="icon iconfont">&#xe502;</i>
						</span>
					</Link>

					<span className="right" onClick={this.save}>加入购物车</span>
				</div>
	
			</div>

		)
	}
}

const mapStateToProps=(state)=>{
    return {
      detailData:state.detailData,
      buyData:state.buyData,
      buyData_1:state.buyData,
      buyData_2:state.buyData,
      descrip:state.descrip,
      pmsList:state.pmsList,
      allImages:state.allImages
    }
}


const mapDispatchToProps=(dispatch)=>{
  return {
  	getdetail:function(did){
  		axios.get('/api/neptune/goods/detail_with_stock/v1?needBrandInfo=true&gid='+did)
  		.then(function(res){
		console.log(res.data.data.goods)
			dispatch({
				type:"DETAIL",
				payload:res.data.data.goods
			})
  		})
  	},
  	getdetailS:function(did){
  		axios.get('/api/neptune/goods/detail_with_stock/v1?needBrandInfo=true&gid='+did)
  		.then(function(res){
		console.log(res.data.data.goods.descriptions)
			dispatch({
				type:"DES",
				payload:res.data.data.goods.descriptions
			})
  		})
  	},
  	getpmsList:function(did){
  		axios.get('/api/neptune/goods/detail_with_stock/v1?needBrandInfo=true&gid='+did)
  		.then(function(res){
		console.log(res.data.data.goods.pmsList)
			dispatch({
				type:"PM",
				payload:res.data.data.goods.pmsList
			})
  		})
  	},
  	getallImages:function(did){
  		axios.get('/api/neptune/goods/detail_with_stock/v1?needBrandInfo=true&gid='+did)
  		.then(function(res){
		console.log(res.data.data.goods.allImages)
			dispatch({
				type:"ALL",
				payload:res.data.data.goods.allImages
			})
  		})
  	},
  	getbuy:function(){
  		axios.get('/api/neptune/handpick_list/v1?stochastic=1&start=1')
  		.then(function(res){
  			console.log(res)
  			dispatch({
  				type:"BUY",
  				payload:res.data.data
  			})
  		})
  	},
  	getbuy_1:function(){
  		axios.get('/api/neptune/handpick_list/v1?stochastic=1&start=2')
  		.then(function(res){
  			console.log(res)
  			dispatch({
  				type:"BUY",
  				payload:res.data.data
  			})
  		})
  	},
  	getbuy_2:function(){
  		axios.get('/api/neptune/handpick_list/v1?stochastic=1&start=3')
  		.then(function(res){
  			console.log(res)
  			dispatch({
  				type:"BUY",
  				payload:res.data.data
  			})
  		})
  	},
  	


  }


}

const DetailCom=connect(mapStateToProps,mapDispatchToProps)(DetailComUI)
export default DetailCom;

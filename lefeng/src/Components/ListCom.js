import React, { Component } from 'react';
import '../Css/List.css';
import {connect} from 'react-redux';
import {Carousel } from 'antd';
import { BackTop } from 'antd';
import '../Css/antd.css';
import {
  Link
} from 'react-router-dom';
import Footer from './FooterCom';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import axios from 'axios';


class ListUI extends Component{
	 componentDidMount() {
		this.props.getSlide();
		this.props.getSpecial();
		this.props.getFina();
		this.props.getEvery();
	}
	render() {
		var props = this.props;
		console.log(this.props);
		return(
			<div className='home'>
				<div className='search'>
					<img src='../images/home-img/name.png' alt='' className='name'/>
					<Link to='/search'>
						<div className='center'>
							<img src='../images/home-img/big.png' alt='' className='big'/>
							<span>阿芙</span>
						</div>
					</Link>
					<i class="iconfont">&#xe601;</i>
				</div>
				<div className='slide'>
					<Carousel autoplay>
					{
						props.slide.map(function(item, index) {
							return(
								<Link to={'/details/' + item.bannerId}>
								<div key={item.bannerId}><img src={item.imgFullPath} alt=''/></div>
								</Link>
							) 
						})
					}
					</Carousel>			  
				</div>
				<div className='five'>
				{
					props.slide2.map(function(item, index) {
							return <div key={item.bannerId}><img src={item.imgFullPath} alt=''/></div>
					})
				}
								  
				</div>
				<div className='money'>
					<img src='https://b.appsimg.com/upload/mst/2017/09/04/64/b3d413eefac199bb4034c781dce80f9d.jpg' alt=''/>			  
				</div>
				<div className='plugin'>
					<img src='https://b.appsimg.com/upload/mst/2017/11/27/143/split_0feb2da2ea4b9af7371d0baf881100e28.jpg' alt=''/>
					<img src='https://b.appsimg.com/upload/mst/2017/11/27/8/split_1feb2da2ea4b9af7371d0baf881100e28.jpg' alt=''/>
					<img src='https://b.appsimg.com/upload/mst/2017/11/27/144/split_2feb2da2ea4b9af7371d0baf881100e28.jpg' alt=''/>
					<img src='https://b.appsimg.com/upload/mst/2017/11/27/143/split_3feb2da2ea4b9af7371d0baf881100e28.jpg' alt=''/>
					<img src='https://b.appsimg.com/upload/mst/2017/11/27/144/split_4feb2da2ea4b9af7371d0baf881100e28.jpg' alt=''/>
					<img src='https://b.appsimg.com/upload/mst/2017/11/27/31/split_5feb2da2ea4b9af7371d0baf881100e28.jpg' alt=''/>
					<img src='https://b.appsimg.com/upload/mst/2017/11/27/23/split_6feb2da2ea4b9af7371d0baf881100e28.jpg' alt=''/>
					<img src='https://b.appsimg.com/upload/mst/2017/11/27/0/split_7feb2da2ea4b9af7371d0baf881100e28.jpg' alt=''/>			  
				</div>
				<section className='scoll'>
					<div className='simple'>
						<img src='http://b.appsimg.com/2017/11/24/7470/151150648083_410x303_80.jpg' alt=''/>
					</div>
					<div className='simple'>
						<img src='http://b.appsimg.com/2017/11/20/17/151116299414_410x303_80.jpg' alt=''/>
					</div>
					<div className='simple'>
						<img src='http://b.appsimg.com/2017/11/27/7206/151174893947_410x303_80.jpg' alt=''/>
					</div>
					<div className='simple'>
						<img src='http://b.appsimg.com/2017/11/24/7390/151150665479_410x303_80.jpg' alt=''/>
					</div>
					<div className='simple'>
						<img src='http://b.appsimg.com/2017/11/14/4245/151065057414_410x303_80.jpg' alt=''/>
					</div>
				</section>
				<section className='han'>
					{
						props.hanList.map((item, index) => {
							return(
								<Link to={'/details/'+item.bannerid}>
								<div key={item.bannerid}><img src={item.imgFullPath}/></div>
								</Link>
							) 
						})
					}
				</section>
				<section className='global'>
					{
						props.globalList.map((item, index) => {
							return(
								<div>
									<span>{item.pictitle}</span>
									<Link to={'/detail/'+item.gid}>
									<div key={item.bannerid} className='buy'><img src={item.imgFullPath}/></div>
									</Link>
								</div>
								
							)
						})
					}

				</section>
				<div className='slide3'>
					<Carousel autoplay>
					{
						props.slide3.map(function(item, index) {
							return(
								<Link to={'/detail/'+item.gid}>
								<div className='outBox' key={item.bannerId}>
									<img src={item.imgFullPath}alt=''/>
								</div>
								</Link>
							) 
						})
					}
					</Carousel>	
				</div>
				<div className='special'>
					<span className='spec'>品牌专场</span>
					{
						props.specialList.map((item, index) => {
							return(
								<div className='bigbox' key={index}>
								<Link to={'/details/'+item.bid}>
									<div className='boxA'>
										<img src={item.brandImage} alt=''/>
									</div>
								</Link>
									<div className='boxB'>
										
										{
												props.otherList.map(function(item, index){
													return(
														
														<div className='boxC' key={index}>
														<Link to={'/detail/' + item.gid}>
															<div className='boxD'>
																<img src={item.image} alt='' />
															</div>
															
															<span>￥{item.vipshopPrice}</span>
														</Link>
														</div>

													)
												})
										}		
										
									</div>
								</div>
							)
						})
					}
				</div>
				<div className='finally'>
					{
						props.finaList.map((item, index) => {
							return(
								<div className='end'>
								<Link to={'/details/' + item.bid}>
									<div className='finaPic'>
										<img src={item.brandImage} alt=''/>
									</div>
									<p className='p1'>
										<span className='ss1'>
											{item.agio}
										</span>
										<span className='ss2'>
											{item.name}
										</span>
									</p>
									<p className='p2'>
										{item.pms}
									</p>
								</Link>
								</div>
								
							)
						})
					}
				</div>

				<div className='every'>
					<span className='eve'>每日精选</span>
					{
						props.everyList.map((item, index) => {
							return(
								<div className='shopInfo' key={index}>
								<Link to={'/detail/' + item.goods.gid}>
									<div className='imgInfo'>
										<img src={item.goods.image} alt='' />
									</div>
									<p className='nameInfo'>
										<span class='name1'>
											{item.goods.brandStoreName}
										</span>
										<span class='name2'>
											{item.goods.productName}
										</span>
									</p>
									<div className='priceInfo'>
										￥<span className='now'>{item.goods.vipshopPrice}</span>
										<span className='old'>￥{item.goods.marketPrice}</span>
										<img className = 'priceImg' src='data:image/png;base64,
										iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAAyVBMVEUAAAD/gar/hKr/hKz/gar/////hKz/gav/gKr/h63/m7b/gKv/gKv/gar/gav/jK//gKr/gKr/gqv/gqv/gKr/gKv/gav/gav/gqz/gqv/hKz/g63/hKz/i63/gar/gKr/gKv/gKv/gKv/gav/gqv/g6z/g6v/haz/hqz/trb/gqz/gar/gav/hLD/gqv/gKr/8/f/0uH/tc7/gqv/4+3/w9b/scv/ocD/mrv/kLT/ydv/6/L/6vH/3Of/2OT/vNL/qMX/krb/jLJiP+PHAAAAL3RSTlMASzY09gEm+/IZB4PTy2kO5N3Xwbezd29jWD8vHxTprZ2YkX5RRDoqIwPupoodX4kG7iAAAAInSURBVFjD7djZbuJAFATQMmCMbcK+DTthT0I6xIEEkln//6NGFwdpEFiuRj0vMz7PraLdt9QYkEgk/lN2NytWHsxx8yoU9AePRZhxq/6Q83swYahO9KcwoJM7TQ3GMKA3+SJa41omjPVhUnEc7roAoxY3EprJwqjiIbUKs3olSU3BLEtC72GYHEDOhlkF2WoaZs0ltJEipLseSEtH5q84FX8BSkUWK5bjU9utK6XuFK/mkZehozTcs+Pfrwn7519KtBFrKuvWT5T3V1lcR6yurNs8kd7kBoo/VVvu1S0bupctdLhOvbKh3yR0xnVqx4auydAH+apiQ79LaI/s1IvGoEow26kXtv0rjU5tZa0FmOzUV8ks2SDk2U597CS0CcaA7NT7m2Tml2A8yFpiSD9lnTMDpUV1ahMo0QKnHd+pj81O883LVTKp50jbH4fDpId07BSnb4GXpyKDYREaBkRkZpTFEd+pTKRcuXprneyS7hS9EZ1OPcKsoiMvCX/jfdJJg8YfasmFUV5ZUsuW4VEFSlT9iRWjA15TsYY6qQ6bugAvlSdDV9BgTwY5ItOHJtvtpGO4+GfNG6NmxGx7hdF4his0pFWZAi6w+jKj0RK6JuogaONM97MWjauuKlGL/I9I/5ex56jQHc5U1ae5bkePzS/jTO0Yqt3SevSN0Tj7PFY2Ez79hd14lXCGU2hLy5Vyc/HYXHmMkoUr2Fmriwiu1VkikUic+A0oSSO0LAB34wAAAABJRU5ErkJggg==' alt=''/>
									</div>
								</Link>
								</div>
							)
						})
					}
				</div>
				<Footer></Footer>
				<div>
				    <BackTop>
				      <div className="ant-back-top-inner">
				      		RUNTOP
				      </div>
				    </BackTop>
				    
				  </div>
				  <div className='SHOP'>
				  	<Link to='carts'>SHOP</Link>
				  </div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		slide: state.slide,
		slide2: state.slide2,
		slide3: state.slide3,
		hanList: state.hanList,
		globalList: state.globalList,
		specialList: state.specialList,
		otherList: state.otherList,
		finaList: state.finaList,
		everyList: state.everyList
	}
}
const mapDispatchToProps = (dispatch) => {
	return{
		getSlide: function() {
			axios.get('/api/neptune/brand/ad/v3?zoneId=943%2C478%2C496%2C693%2C724%2C725%2C726%2C727%2C728&resolution=414x736&appName=lefeng_android&version=4.1.1')
			.then(function(res){
				console.log(res);
				var slideList = res.data.data[478];
				var slideList2 = res.data.data[496];
				var slideList3 = res.data.data[728];
				var hanList = res.data.data[725];
				var globalList = res.data.data[727];
				console.log(slideList);
				console.log(slideList2);
				dispatch({
					type: 'GET_SLIDE',
					payload: slideList
				}),
				dispatch({
					type: 'GET_SLIDE2',
					payload: slideList2
				}),
				dispatch({
					type: 'GET_SLIDE3',
					payload: slideList3
				}),
				dispatch({
					type: 'GET_HAN',
					payload: hanList
				}),
				dispatch({
					type: 'GET_GLOBAL',
					payload: globalList
				})

			})
		},
		getSpecial: function() {
				axios.get('/api/neptune/special_brands/v3?page=1&labelType=1')
				.then(function(res) {
					console.log(res);
					var special = res.data.data;
					var other = res.data.data[0].starProductList;
					console.log(special);
					dispatch({
						type:'GET_SPECIAL',
						payload:special
					}),
					dispatch({
						type:'GET_OTHER',
						payload:other
					})
				})
		},
		getFina: function() {
				axios.get('/api/neptune/special_brands/v3?page=6&labelType=1')
				.then(function(res) {
					console.log(res);
					var finaList = res.data.data;
					console.log('vc')
					console.log(finaList);
					console.log('bb')
					dispatch({
						type:'GET_FINA',
						payload:finaList
					})
				})
		},
		getEvery: function() {
				axios.get('/api/neptune/handpick_list/v1?start=1')
				.then(function(res) {
					console.log(res);
					var everyList = res.data.data;
					console.log('eee')
					console.log(everyList);
					console.log('hhh');
					dispatch({
						type:'GET_EVERY',
						payload:everyList
					})
				})
		}
	}
}
const List = connect(mapStateToProps, mapDispatchToProps)(ListUI);
export default List;
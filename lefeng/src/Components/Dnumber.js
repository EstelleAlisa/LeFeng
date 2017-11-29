
import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import '../Css/details.css'
import {
  Link
} from 'react-router-dom'

class DnumberUI extends React.Component{
	componentDidMount() {
		this.props.getpriceData()
	}
	

	render(){
		var props=this.props;
		return (
			<div className="dprice">
				{
					props.priceData.map((item, index) => {
						return(
							<div className='shopInfo' key={index}>
								<div className='imgInfo'>
									<Link to={'/detail/'+item.goods.gid}>
									   <img src={item.goods.image} alt='' />
									</Link>  
								</div>
								<p className='nameInfo'>
									<span class='name1'>
										{item.goods.name}
									</span>
									<span class='name2'>
										{item.goods.productName}
									</span>
								</p>
								<div className='priceInfo'>
									￥<span className='now'>{item.goods.vipshopPrice}</span>
									<span className='old'>￥{item.goods.marketPrice}</span>
									<img className = 'priceImg' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAAyVBMVEUAAAD/gar/hKr/hKz/gar/////hKz/gav/gKr/h63/m7b/gKv/gKv/gar/gav/jK//gKr/gKr/gqv/gqv/gKr/gKv/gav/gav/gqz/gqv/hKz/g63/hKz/i63/gar/gKr/gKv/gKv/gKv/gav/gqv/g6z/g6v/haz/hqz/trb/gqz/gar/gav/hLD/gqv/gKr/8/f/0uH/tc7/gqv/4+3/w9b/scv/ocD/mrv/kLT/ydv/6/L/6vH/3Of/2OT/vNL/qMX/krb/jLJiP+PHAAAAL3RSTlMASzY09gEm+/IZB4PTy2kO5N3Xwbezd29jWD8vHxTprZ2YkX5RRDoqIwPupoodX4kG7iAAAAInSURBVFjD7djZbuJAFATQMmCMbcK+DTthT0I6xIEEkln//6NGFwdpEFiuRj0vMz7PraLdt9QYkEgk/lN2NytWHsxx8yoU9AePRZhxq/6Q83swYahO9KcwoJM7TQ3GMKA3+SJa41omjPVhUnEc7roAoxY3EprJwqjiIbUKs3olSU3BLEtC72GYHEDOhlkF2WoaZs0ltJEipLseSEtH5q84FX8BSkUWK5bjU9utK6XuFK/mkZehozTcs+Pfrwn7519KtBFrKuvWT5T3V1lcR6yurNs8kd7kBoo/VVvu1S0bupctdLhOvbKh3yR0xnVqx4auydAH+apiQ79LaI/s1IvGoEow26kXtv0rjU5tZa0FmOzUV8ks2SDk2U597CS0CcaA7NT7m2Tml2A8yFpiSD9lnTMDpUV1ahMo0QKnHd+pj81O883LVTKp50jbH4fDpId07BSnb4GXpyKDYREaBkRkZpTFEd+pTKRcuXprneyS7hS9EZ1OPcKsoiMvCX/jfdJJg8YfasmFUV5ZUsuW4VEFSlT9iRWjA15TsYY6qQ6bugAvlSdDV9BgTwY5ItOHJtvtpGO4+GfNG6NmxGx7hdF4his0pFWZAi6w+jKj0RK6JuogaONM97MWjauuKlGL/I9I/5ex56jQHc5U1ae5bkePzS/jTO0Yqt3SevSN0Tj7PFY2Ez79hd14lXCGU2hLy5Vyc/HYXHmMkoUr2Fmriwiu1VkikUic+A0oSSO0LAB34wAAAABJRU5ErkJggg==' alt=''/>
								</div>
							</div>
						)
					})
				}
			</div>





		)
		
}
}

const mapStateToProps=(state)=>{
    return {
		priceData:state.priceData
    }
 }

 const mapDispatchToProps=(dispatch)=>{
 	return {
 		getpriceData:function(){
 			axios.get('/api/neptune/goods/list_with_stock/v1?brandId=800061007&start=1&sort=%7B"sale"%3A"desc"%7D')
 			.then(function(res){
 				console.log(res)
 				dispatch({
 					type:"PRICE",
 					payload:res.data.data
 				})
 			})
 		}

 	}
 }

const Dnumber=connect(mapStateToProps,mapDispatchToProps)(DnumberUI)
export default Dnumber;
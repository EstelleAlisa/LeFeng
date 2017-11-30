import React from 'react';
import {connect} from 'react-redux';
import '../Css/ShopList.css';
import axios from 'axios';
import {
  	Link
} from 'react-router-dom';

class NumberUI extends React.Component{
	componentDidMount() {	
		if(this.props.numberItem.length == 0){
			this.props.getNumberItem(this.props.match.params.value);
		}
		
	}
	render() {
		var props = this.props;

		return(
			<div className='searShop'>
				<ul>
					{
						props.numberItem.map((item, index) => {
							return(
								<Link to={'/detail/' + item.goods.gid} key={index}>	
									<li>
										<div className='shop'>
											<img src={item.goods.image} class='shop' alt=''/>
										</div>
									
										<div class="right">
										<p class="p1">
											{item.goods.brandStoreName}
										</p>
										<p class="p2" id='shop_name'>
											{item.goods.productName}
										</p>
										<p class="p3">
											<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNTgwNTE5QTBBQ0VFNDExQUI3REYyNzUzQ0NDMzhDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NTU5QzI3RThDMkExMUU1QkQ5MUExNzJGMjkwMjVCOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NTU5QzI3RDhDMkExMUU1QkQ5MUExNzJGMjkwMjVCOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxZDAyNjM0ZS04OTRmLWZlNDItODNmOS04YmUwNWMyOGJlNDYiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxZDU2NThiMy00ZTRjLTExNzgtYWMwMC05YTViM2VlMDk1ZmQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Z1ouGAAADdklEQVR42ryWe2jNYRjHd3bWzGWbmdtcEyVh7pdCiybLpYYQJfHHSfwj/9ByCxHLH7JcTqghd/YHK7kkWjT/iJq2YdTkksvmNja24/PU9+h1OjvnN8mvPr3nd973fb7v+7zP8z4/XygUSvifT2LCf36S/oWRYDC4nGY7NMI9OAY3AoFA418JYrAjTTfoDMnQAHXwGqPNtH74DKkwHxZBEfMK6P/s2vLFO0Mm5dAsgznQ1emqhrO2G4w+Zlwmv7MgF1bDINhiO9ei4gtiZDHNAUiHSngGTdABRkB3uA9LMVrhzJtCc1GemOn2JcYQG0WzV27aLFflMzmfdq7ez4GN28f4VGf6HSiBfpDt9QyX6dwKEdnqdvD+laYMkUe0vWEqjIWb6m+mr1rDe8RNCwZn0AyHn3CqtRVh+APNJb3mMs8fxbbPSx520e5eQX2cILaz/aIgce2FXfzRi2CiQr3JQ9Y0yhNJ4d3oPAeDReQbL4LNMpLs4TZKkViTBOzpBRapT6DGi+B3uSldorGeTInWaaH2zICeitbHXgRt8jtIi0j2aM8A7bCSIGrBnZP4vV45eJr/fsYVZNA3mqd6zY6Rq0lOf7nEjujGKcLOlbZUi9tg+bYCQ51aGTMRTOSlFrhSwXIQNrS1PF2HuzDaJkfkmO3ObhG7EDJ0I9XrzFugHUxmTHvPgrjDgmajVr4WdmPA54gd1A1zGY7qrF7IppWr8xY0jN0BWV7LUzkc1k5mwTqlSx+YbuXJLnfE3ml8AVyDoZAnd9sZL0B0kwVRUpRASFMOLYQc3ZWRedai+mehf4E5VbRX4SSUsoAS/ivk90hFrJW2Ykub3+VJ7poGu2CMBOyufKtcKsHQCeeuDSjf+uvsMrWY41YHGVvjbGKVVRSodQVtFWeU6GWqZ+aeJ0z+ESM1zCPDYDbMU5Q+MDdaYXbGlZpHXJfuVGvhvCeWSERwfdKNYgFi570NlsAaVf7wYynjd6O0r9wX9CoWRbxGnx0JjovDfbXw3BW8pejbqe+Tv/l6y1VEh5TDMT8Tt+nmsGDIZrLdNA+hSiWmQSkRzt8U7WKgzm28oru7inZxNME/PqIQmaAvrTz91aDw/y6xkFPF/QqwTiq29l8t7IdDuK8urqBEzcAQfe6N09laGnSUgE/i31TNLfkrdCQWPO/dz8LI55cAAwAcNkJPe7d37wAAAABJRU5ErkJggg==" alt='' />
											<span class="num">{item.goodsStock.saled}人购买</span>
										</p>
										<p class="p4">
											<span class="now" id='shop_price'>￥{item.goods.vipshopPrice}</span>
											<span class="old">
												￥{item.goods.marketPrice}
											</span>
											<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAAyVBMVEUAAAD/gar/hKr/hKz/gar/////hKz/gav/gKr/h63/m7b/gKv/gKv/gar/gav/jK//gKr/gKr/gqv/gqv/gKr/gKv/gav/gav/gqz/gqv/hKz/g63/hKz/i63/gar/gKr/gKv/gKv/gKv/gav/gqv/g6z/g6v/haz/hqz/trb/gqz/gar/gav/hLD/gqv/gKr/8/f/0uH/tc7/gqv/4+3/w9b/scv/ocD/mrv/kLT/ydv/6/L/6vH/3Of/2OT/vNL/qMX/krb/jLJiP+PHAAAAL3RSTlMASzY09gEm+/IZB4PTy2kO5N3Xwbezd29jWD8vHxTprZ2YkX5RRDoqIwPupoodX4kG7iAAAAInSURBVFjD7djZbuJAFATQMmCMbcK+DTthT0I6xIEEkln//6NGFwdpEFiuRj0vMz7PraLdt9QYkEgk/lN2NytWHsxx8yoU9AePRZhxq/6Q83swYahO9KcwoJM7TQ3GMKA3+SJa41omjPVhUnEc7roAoxY3EprJwqjiIbUKs3olSU3BLEtC72GYHEDOhlkF2WoaZs0ltJEipLseSEtH5q84FX8BSkUWK5bjU9utK6XuFK/mkZehozTcs+Pfrwn7519KtBFrKuvWT5T3V1lcR6yurNs8kd7kBoo/VVvu1S0bupctdLhOvbKh3yR0xnVqx4auydAH+apiQ79LaI/s1IvGoEow26kXtv0rjU5tZa0FmOzUV8ks2SDk2U597CS0CcaA7NT7m2Tml2A8yFpiSD9lnTMDpUV1ahMo0QKnHd+pj81O883LVTKp50jbH4fDpId07BSnb4GXpyKDYREaBkRkZpTFEd+pTKRcuXprneyS7hS9EZ1OPcKsoiMvCX/jfdJJg8YfasmFUV5ZUsuW4VEFSlT9iRWjA15TsYY6qQ6bugAvlSdDV9BgTwY5ItOHJtvtpGO4+GfNG6NmxGx7hdF4his0pFWZAi6w+jKj0RK6JuogaONM97MWjauuKlGL/I9I/5ex56jQHc5U1ae5bkePzS/jTO0Yqt3SevSN0Tj7PFY2Ez79hd14lXCGU2hLy5Vyc/HYXHmMkoUr2Fmriwiu1VkikUic+A0oSSO0LAB34wAAAABJRU5ErkJggg==" alt=''/>
										</p>
										</div>
									</li>
								</Link>
							)
						})
					}
				</ul>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return{
		numberItem: state.numberItem
	}
}
const mapDispatchToProps = (dispatch) => {
	return{
		getNumberItem: function(newData) {
			axios.get('/api/neptune/search/search_by_keyword/v1?keyword=' + newData +'&page=2')
			.then(function(res) {
				console.log(res);
				var numberItem = res.data.data;
				dispatch({
					type: 'GET_NUMBER',
					payload:numberItem
				})
			})
		}
	}
}
const NumberA = connect(mapStateToProps, mapDispatchToProps)(NumberUI);
export default NumberA;
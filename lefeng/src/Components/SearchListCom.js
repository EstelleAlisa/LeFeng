import React from 'react';
import {connect} from 'react-redux';
import '../Css/SearchList.css';
import axios from 'axios';
import {
  	Link
} from 'react-router-dom';

class SearchlistUI extends React.Component{
	componentDidMount() {
		this.props.getSear(this.props.match.params.value);
	}
	render() {
		var props = this.props;
		var match = this.props.match;
		console.log(match)
		return(
			<div className='searchlist'>
				<ul>
					{
						props.searchList.map((item, index) => {
							return(
								// <Link to={'/search/shoplist/shop/' + item}  >
									<li key={index}>{item}</li>	
								// </Link>
								
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
		searchList: state.searchList	
	}
}
const mapDispatchToProps = (dispatch) => {
	return{
		getSear: function(newData) {
			axios.get('/api/neptune/search/suggestion/v1?keyword=' + newData +'&count=15')
			.then(function(res) {
				console.log(res);
				var searchList = res.data.data;
				dispatch({
					type: 'GET_SEAR',
					payload:searchList
				})
			})
		}
	}
}
const SearchList = connect(mapStateToProps, mapDispatchToProps)(SearchlistUI);
export default SearchList;
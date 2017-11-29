import React from 'react';
import {connect} from 'react-redux';
import '../Css/SearchList.css';
import axios from 'axios';

class SearchlistUI extends React.Component{
	componentDidMount() {
		this.props.getSear();
	}
	render() {
		var props = this.props;
		return(
			<div className='searchlist'>
				<ul>
					{
						props.searchList.map((item, index) => {
							return <li key={index}>{item}</li>
						})
					}
				</ul>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return{
		newVal: state.newVal,
		searchList: state.searchList
		
	}
}
const mapDispatchToProps = (dispatch) => {
	return{
		getSear: function(data) {
			axios.get('/api/neptune/search/suggestion/v1?keyword=z&count=15')
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
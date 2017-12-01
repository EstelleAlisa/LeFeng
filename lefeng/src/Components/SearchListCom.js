import React from 'react';
import {connect} from 'react-redux';
import '../Css/SearchList.css';
import axios from 'axios';
import {
	BrowserRouter as Router,
  	Link
} from 'react-router-dom';

class SearchlistUI extends React.Component{
	componentDidMount() {
		// if(this.props.searchList.length == 0){
		// 	this.props.getSear(this.props.match.params.value);
		// }
		
	}

	render() {
		var props = this.props;
		var match = this.props.match;
		return(
			<div className='searchlist'>
				<ul>
					{
						props.currentList.map((item, index) => {
							return(
								 <Link to={'/search/shoplist/' + item} key={index}>
									<li>{item}</li>	
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
		searchList: state.searchList,
		currentList: state.currentList
	}
}
const mapDispatchToProps = (dispatch) => {
	return{
		getSear: function(newData) {
			axios.get('/api/neptune/search/suggestion/v1?keyword=' + newData +'&count=15')
			.then(function(res) {
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
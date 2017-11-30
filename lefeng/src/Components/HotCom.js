import React from 'react';
import {connect} from 'react-redux';
import '../Css/Hot.css';
import axios from 'axios';
import {
  	Link
} from 'react-router-dom';

class HotUI extends React.Component{
	componentDidMount() {
		this.props.getHot()
	}
	render() {
		var props = this.props;
		return(
			<div className='hot'>
				<div className='allSear'>
					<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAMAAAANf8AYAAAAllBMVEUAAAC4uLi4uLi6urq4uLi5ubm5ubm3t7fi4uK4uLi4uLi/v7+3t7e4uLjLy8u4uLi6urq4uLi4uLi5ubnFxcW3t7e4uLi4uLi5ubm4uLi8vLy4uLi4uLi4uLi4uLi4uLi4uLi5ubm4uLi9vb25ubm4uLi4uLi4uLi4uLi9vb3AwMC8vLy3t7fu7u7CwsLk5OTR0dHOzs6D9YkbAAAALHRSTlMAgJoz4zlpysL8ZRiS7gfWPfegSAvSrGEuJSGzxId7c71aVBVu6KeV2hLxQYcjqwYAAAIcSURBVEjH1ZVZd6IwGECDLE5oAUEQhbov1fba5f//uWGQEMWp5Mzb3AdPfLgnLDcf4o5xuZco5L4ciz7SAV0GaY8z4Z7JY2UNfH+eNZ/fwPqhE8HX+ZYviB4pW+DcBdg+cKbwced8wPSBY//g2P+bk45yv8KCt19d3sDyK/LRTRB+gAmBr5UlpiyVMpMQJYM+kghkobdZhaKfcKU3mqgK+1jrxl9gZOSM4KVZOjAzcmbgNMsYUiMnhfiyOkEgzAjgpA5AZOhE6liMYWXorOAyhnJIDJ0E8nqxgLmhM4dFvXiFnbAtNft2Vlr9zrwke3n2q0GwsTRLeFUZbITHc/u2nqp7jCGIwXFvJl4OkzaDjuMhraLaLCHezNyKCN+teFchOFDcOk+xfFf57ut6h5ejWqgQJIS3zrN+kBnelROCbOZgIG4dRw80n0PjqBC2bQYeQ+tCQCEJdcpD5agQ2gw8NCMcoShwlKNCaDPwmLgX9thox9X7qBCaDDr3E8tQOWt9PyqEJoOOkzHW37DltbO7hFDCpuN4DNuTGaTXzgbK+i9uxwmPJGGtHJsmlePCUGXQacd2OA683SFgLlpHhaAy6DZ6OkgAZyO0o0N4+mEahPZ6vP3rRKguAzJhTga2mnMG6IPjGk8dFZwrUsA2Vmwgrd9pVhgqswzKP6qEuJxb/czLGOL6onKJOTJvzlWGKZn+6Ez9hdXPwp+Kf+U3k2SF6s0sNRMAAAAASUVORK5CYII=' alt=''/>
					<span>大家都在搜</span>
				</div>
				<ul className='things'>
				{
					props.hotList.map((item, index) => {
						return(
							<Link to={'shoplist/' + item.word} key={index}>
								<li>{item.word}</li>
							</Link>
						) 
					})
				}
				</ul>
				<div className='histSear'>
					<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAMAAAANf8AYAAAAhFBMVEUAAAC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLjR0dG8vLy+vr64uLi4uLi4uLi4uLi4uLi4uLi7u7u3t7e4uLi4uLi4uLi5ubm6urq5ubm9vb24uLi4uLi5ubm4uLi4uLi3t7e4uLi4uLi8vLy4uLi4uLi4uLi5ubm5ubm4uLi8vLy3t7cw1SYGAAAAK3RSTlMAT+34w5yM8XUFChWyIOrYXlc35tO6hkY7JxCUeyv24a2mZhxsz2RKPm8uLoIqbgAAAhtJREFUSMetltea6jAMhMWmV0ivdBbYnfd/v2MlhxKc4ov9b+BzMpFGUmKTjHc19L2l7cK1bxYOLVO1Ot6xjlE9r9j6kLFad1pxNsBomR2VgVtvi425BpOcplI87SA4DHOp7JRX02pM4TQQ+FuS2Ow5wYIk6kxc+L7TGI7NGfxIEk78OOn1l0PlH0/iKC1N43EHNoMl9hLRHM4B0OL3igmJTfO430ByfvVlJ7x85NIYxmW4FISiEfTAEBX7sL8C8EVDSrFWPgZG/L/TsoafrVOPD/ikogk0YNVPh7i8VdKQ+QjUsjU1jScCeSTQgUhRQxlwZS2g1aqaS2/9CmSkqjmLAG5XQFtZQ2KU496OuibrJnUvmjuusVY9N2fQ1pbIAoJxTc/wHcgBk0gD3AXNaVA4g0jMdK2usYGGKOTJkdgmX0/C+2B68q56BSlz7Drjs0dldJ5sjmYqS9hJRVQAa2VJCSTix7FYqgYn1TxtKfEqWASkipIYsLpBqi3lyuk8BY+Xe++oSG6A9n823UTRUfrWlhOw+12W5MKN9/x+pyI7b0kSDT/qlQXoC5Zi7ePTWfBG6s5KhOl0eMcP74zBTGIiShjIBhGWM/YRxvLurIl1YzTULeXdPpjIGJrpSes6BP642/OhP4Vczm/D359ErOmelzo61pmRX2zzqIeAFFxipeMTSzYpn9587SVImsIhFdx405pGk9uriv6Kf9roUcdh9JbSAAAAAElFTkSuQmCC' alt=''/>
					<span>历史搜索</span>
					
				</div>	
				<ul className='things'>
					{
						props.newVal.map((item, index) => {
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
		hotList: state.hotList,
		newVal: state.newVal
	}
}
const mapDispatchToProps = (dispatch) => {
	return{
		getHot: function() {
			axios.get('/api/neptune/search/hot_keywords/v1?count=10&highlight=1&needType=1')
			.then(function(res) {
				var hotList = res.data.data;
				dispatch({
					type: 'GET_HOT',
					payload:hotList
				})
			})
		}
	}
}
const Hot = connect(mapStateToProps, mapDispatchToProps)(HotUI);
export default Hot;
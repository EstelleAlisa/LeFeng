import {combineReducers}  from 'redux';
import detailReducer from './detailReducer'
import detailReducer_2 from './detailReducer_2'
import detailReducer_3 from './detailReducer_3'
import detailReducer_4 from './detailReducer_4'
const reducers = combineReducers({
	detailData:detailReducer,
	buyData:detailReducer_2,
	buyData_1:detailReducer_3,
	buyData_2:detailReducer_4
})

export default reducers;
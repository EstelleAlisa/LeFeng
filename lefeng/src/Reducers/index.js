import {combineReducers}  from 'redux';
import detailReducer from './detailReducer'
import detailsReducer from './detailsReducers'
import detailReducer_2 from './detailReducer_2'
import detailReducer_3 from './detailReducer_3'
import detailReducer_4 from './detailReducer_4'
import priceReducer from './priceReducer'
const reducers = combineReducers({
	detailData:detailReducer,
	buyData:detailReducer_2,
	buyData_1:detailReducer_3,
	buyData_2:detailReducer_4,
	detailsData:detailsReducer,
	priceData:priceReducer
})

export default reducers;
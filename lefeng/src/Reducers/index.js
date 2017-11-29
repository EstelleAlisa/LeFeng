import {combineReducers}  from 'redux';

import detailReducer from './detailReducer'
import detailsReducer from './detailsReducers'
import detailReducer_2 from './detailReducer_2'
import detailReducer_3 from './detailReducer_3'
import detailReducer_4 from './detailReducer_4'
import priceReducer from './priceReducer'

import ListReducers from './ListReducers'
import ListReducers2 from './ListReducers2'
import ListReducers3 from './ListReducers3'
import HanReducers from './HanReducers'
import GlobalReducers from './GlobalReducers'
import SpecialReducers from './SpecialReducers'
import otherReducers from './otherReducers'
import finaReducers from './finaReducers'
import everyReducers from './everyReducers'
import hotReducers from './hotReducers'
import searchlistReducers from './searchlistReducers'
import shoplistReducers from './shoplistReducers'
import valueReducers from './valueReducers'
import shopReducers from './shopReducers'
import numberReducers from './numberReducers'
import priceReducers from './priceReducers'

const reducers = combineReducers({
	slide: ListReducers,
	slide2: ListReducers2,
	slide3: ListReducers3,
	hanList: HanReducers,
	globalList:GlobalReducers,
	specialList: SpecialReducers,
	otherList: otherReducers,
	finaList: finaReducers,
	everyList: everyReducers,
	hotList: hotReducers,
	searchList:searchlistReducers,
	shopList:shoplistReducers,
	newVal: valueReducers,
	shopItem: shopReducers,
	numberItem: numberReducers,
	priceItem: priceReducers,
	detailData:detailReducer,
	buyData:detailReducer_2,
	buyData_1:detailReducer_3,
	buyData_2:detailReducer_4,
	detailsData:detailsReducer,
	priceData:priceReducer
})

export default reducers;
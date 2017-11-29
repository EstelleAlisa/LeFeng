export default function(state=[], action) {
	let newS;
	switch(action.type){
		case 'GET_SLIDE3':
			newS = [...state];
			newS = action.payload;
			return newS;
		default:
			return state;
	}

}
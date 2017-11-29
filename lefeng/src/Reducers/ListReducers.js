export default function(state=[], action) {
	let newS;
	switch(action.type){
		case 'GET_SLIDE':
			newS = [...state];
			newS = action.payload;
			return newS;
		default:
			return state;
	}

}
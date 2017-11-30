export default function(state=[], action) {
	let newS;
	switch(action.type){
		case 'CHANGE_VAL':
			newS = [...state];
			newS = action.payload;
			return newS;
		default:
			return state;
	}

}
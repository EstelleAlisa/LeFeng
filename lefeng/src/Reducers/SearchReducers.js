export default function(state=[], action) {
	let newS;
	switch(action.type){
		case 'GET_HISTORY':
			newS = [...state];
			newS = action.payload;
			console.log('FFF');
			return newS;
		default:
			return state;
	}

}
export default function(state=[], action) {
	let newS;
	switch(action.type){
		case 'GET_SHOP':
			newS = [...state];
			newS = action.payload;
			console.log(newS);
			return newS;
		default:
			return state;
	}

}
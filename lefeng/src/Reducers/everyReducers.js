export default function(state=[], action) {
	let newS;
	switch(action.type){
		case 'GET_EVERY':
			newS = [...state];
			newS = action.payload;
			console.log('aaa');
			return newS;
		default:
			return state;
	}

}
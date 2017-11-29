export default function(state=[], action) {
	let newS;
	switch(action.type){
		case 'GET_SEAR':
			newS = [...state];
			newS = (action.payload);
			console.log('aaa');
			return newS;
		default:
			return state;
	}

}
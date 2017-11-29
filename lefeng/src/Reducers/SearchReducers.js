export default function(state=[], action) {
	let newS;
	switch(action.type){
		case 'CHECK_HISTORY':
			newS = [...state];
			newS.push(action.payload);
			console.log('mmm');
			return newS;
		default:
			return state;
	}

}
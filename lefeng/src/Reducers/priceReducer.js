export default function(state=[],action){
	switch (action.type){
		case "PRICE":
			var newS=[...state];
			newS=action.payload;
			console.log(newS)
			return newS;
		default:
			return state;
	}
}
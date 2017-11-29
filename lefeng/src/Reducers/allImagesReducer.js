export default function(state=[],action){
	switch (action.type){
		case "ALL":
			var newS=[...state];
			newS=action.payload;
			console.log(newS)
			return newS;
		default:
			return state;
	}
}
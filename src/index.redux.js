// reducer

const ADD_GUN = 'add'
const REDUCE = 'reduce'


export function counter(state=0,action){
	switch(action.type){
		case ADD_GUN: 
			return state+1
		case REDUCE:
			return state-1
		default:
			return 10
	}
}

// action creator
export function addGUN() {
	return {type: ADD_GUN}
}

export function reduceGUN() {
	return {type: REDUCE}
}
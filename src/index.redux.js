// reducer

const ADD_GUN = 'add'
const REDUCE = 'reduce'

export function counter(state = 0, action) {
	console.log(action, '99999999999')
  switch(action.type) {
    case ADD_GUN:
      return state + 1
    case REDUCE:
      return state - 1
    default:
      return 100
  }
}

// action creator
export function addGUN() {
  return {
    type: ADD_GUN
  }
}

export function reduceGUN() {
  return {
    type: REDUCE
  }
}

export function addGunAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(addGUN())
    }, 1000)
  }
}
import React from 'react';
import { Button } from 'antd-mobile'
import {createStore} from 'redux'

/**

// 新建store
// 通过reducer建立
// 根据老的state和action 生成新的state

function counter(state=0,action){
	switch(action.type){
		case 'add': 
			return state+1
		case 'reduce':
			return state-1
		default:
			return 10
	}
}

// 新建store

const store = createStore(counter)

const init = store.getState()
console.log(init)

function listener() {
	const current = store.getState()
	console.log(current,'============>')
}

store.subscribe(listener)

// 派发事件 传递action
store.dispatch({
	type: 'add'
})
store.dispatch({
	type: 'add'
})
store.dispatch({
	type: 'reduce'
})
**/

class App extends React.Component {
	render() {
		return(
			<div>122
				<Button type="primary">23</Button>
			</div>
		)
	}
}

export default App;
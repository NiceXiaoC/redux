import React from 'react';
import { Button } from 'antd-mobile'
//import { addGUN } from './index.redux'

class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const store = this.props.store
		const num = store.getState()
		const addGUN = this.props.addGUN
		const reduceGUN = this.props.reduceGUN
		return(
			<div>
				<p>当前状态值:{num}</p>
				<Button type="primary" onClick={()=>{store.dispatch(addGUN())}} style={{width:"200px"}}>加++</Button>
				<Button type="primary" onClick={()=>{store.dispatch(reduceGUN())}} style={{width:"200px"}}>减--</Button>
			</div>
		)
	}
}

export default App;
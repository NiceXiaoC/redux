import React from 'react';
import { connect } from 'react-redux'
//import { addGUN } from './index.redux'
import { addGUN, reduceGUN, addGunAsync } from './index.redux'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      styleCss: {
        width: "200px",
        display: 'inline-block'
      }
    }
  }
  render() {
    const num = this.props.num
    const addGUN = this.props.addGUN
    const reduceGUN = this.props.reduceGUN
    const addGunAsync = this.props.addGunAsync
    return(
      <div>
				<p>当前状态值:{num}</p>
				<a type="primary" onClick={addGUN} style={this.state.styleCss}>加++</a>
				<a type="primary" onClick={reduceGUN} style={this.state.styleCss}>减--</a>
				{/*异步*/}
				<a type="primary" onClick={addGunAsync} style={this.state.styleCss}>一秒后++</a>
			</div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    num: state
  }
}

const actionCreators = {
  addGUN,
  reduceGUN,
  addGunAsync
}

App = connect(mapStatetoProps, actionCreators)(App)
export default App;
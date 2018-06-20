import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login, getUserData } from './Auth.redux'
import axiox from 'axios'

@connect(
	state => ({
		user: state.b
	}), {
		login,
		getUserData
	}
)
class Login extends React.Component {
	//	constructor(props) {
	//		super(props)
	//		this.state = {
	//			data: {
	//
	//			}
	//		}
	//	}
	componentDidMount() {
		this.props.getUserData()
		//		axiox.get('/data').then(res=>{
		//			if(res.status === 200){
		//				this.setState({
		//					data: res.data
		//				})
		//				console.log(res)
		//			}
		//			
		//		})
	}
	render() {
		console.log(this.props)
		return(
			<div>
				<h2>我的名字{this.props.user.user}</h2>
				<button onClick={this.props.login}>登录</button>
			</div>
		)
	}
}
export default Login
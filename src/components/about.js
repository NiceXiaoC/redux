import React from 'react'

class About extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			count: 1
		}
	}
	render() {
		console.log(this.props)
		return <h1>About: {this.props.match.params.location}</h1>
	}
}

export default About
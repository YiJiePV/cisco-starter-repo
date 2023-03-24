import React, { Component } from 'react';

class Latency extends Component{
	constructor(){
		super();
		this.state = {
			lateness: null
		};
	}

	componentDidMount(){
		const socket = new WebSocket("ws://localhost:55455");

		socket.addEventListener("open", (event) => {
			socket.send("Hello World!");
		});

		socket.addEventListener("message", (event)=>{
			this.setState({ lateness: Date.now() - event.data })
		});
	}
	
	render(){
		return(
			<div className='Latency'>
				{this.state.lateness} milliseconds
			</div>
		);
	}
}

export default Latency;
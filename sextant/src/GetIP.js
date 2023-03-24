import React, { Component } from 'react';

class GetIP extends Component{
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
	}

	async componentDidMount() {
		let url = "";
		if(this.props.input === "IPv4"){
		  url = "https://api.ipify.org?format=json";
		}
		else if(this.props.input === "IPv6"){
		  url = "https://api64.ipify.org?format=json";
		}
		else{
		  this.setState({});
		}
		await fetch(url)
			.then(response => response.json())
			.then(data => this.setState({ data }));
	}

	render(){
		const { data } = this.state;
		return(
			<div className='GetIP'>
				{data && <p>{data.ip}</p>}
        	</div>
		);
	}
}

export default GetIP;
import React, { Component } from 'react';
import './Exhibit.css';

//Exhibit component
//with only Title (header 2) and Stuff (inside div block container)
class Exhibit extends Component{
	render(){ //render (puts into visualization)
		return( //stuff to put on visualization
			<div className='Exhibit'>
				<h2 className='ExhibitTitle'>{this.props.title}</h2>
				<div className='ExhibitStuff'>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Exhibit;
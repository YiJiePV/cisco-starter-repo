import React, { Component } from 'react';
import './Banner.css';

//Banner component
//with only Title (header 1)
class Banner extends Component {
    render(){ //render (put into visualization)
        return ( //stuff to put on visualization
            <div className='Banner'>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Banner;
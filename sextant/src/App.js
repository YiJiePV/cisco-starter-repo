import './App.css';
import React, { Component } from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit'
import GetIP from './GetIP'
import Latency from './Latency';

//main App component
//includes Banner component and Exhibit components
class App extends Component{
  render(){ //render (put into visualization)
    return( //stuff to put on visualization
      <div>
        <Banner title='The Sextant'/>
        <div className='ExhibitRow'>
          <Exhibit title='IPv4 Address'>
            <GetIP input="IPv4" />
          </Exhibit>
          <Exhibit title='IPv6 Address'>
            <GetIP input="IPv6" />
          </Exhibit>
          <Exhibit title='Latency'>
            <Latency/>
          </Exhibit>
        </div>
      </div>
    );
  }
}

export default App;

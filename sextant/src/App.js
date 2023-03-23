import './App.css';
import React, { Component } from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit'

//main App component
//includes Banner component and Exhibit components
class App extends Component{
  render(){ //render (put into visualization)
    return( //stuff to put on visualization
      <div>
        <Banner title='The Sextant'/>
        <div className='ExhibitRow'>
          <Exhibit title='Exhibit 1'>This is exhibit 1</Exhibit>
          <Exhibit title='Exhibit 2'>This is exhibit 2</Exhibit>
          <Exhibit title='Exhibit 3'>This is exhibit 3</Exhibit>
        </div>
      </div>
    );
  }
}

export default App;

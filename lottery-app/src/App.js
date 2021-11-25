import React, { Component } from 'react'
import Ball from './Ball';
import Lottery from './Lottery';
import './App.css';
import "./Lottery.css"

class App extends Component{
  render(){
    return(
      <div className="App">
      <Lottery />
      <Lottery title="Mini Weekly" maxNum={10} maxBalls={6} />
      <Lottery title="Mini Daily" maxNum={10} maxBalls={4} />

      </div>
    )

  }
}

export default App;

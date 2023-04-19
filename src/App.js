import React, { Component } from 'react';
import './App.css';
import Circle from './Circle';

class App extends Component {
    state = {
      score: 0,
      current: 0,
      showModal: false,
      circles: [1,2,3]
    }

    modalHandler = (e) => {
      e.preventDefault()
      this.setState({
        showModal: !this.state.showModal
      })
    }

    clickHandler = (circle) => {
      console.log(circle)
      this.setState({
        score: this.state.score +10
      })
    }

    randomizer = () => {
      let nextActive;
      do {
        nextActive = Math.floor(Math.random() * 3) + 1;
      } while (nextActive === this.state.current);
  
      this.setState({
        current: nextActive
      });
    };

  render() {
    return (
      <div className='App'>
        <h1>Speedgame 2.0</h1>
        <p>SCORE: <span>{this.state.score}</span></p>
        <div className='gamezone'>
          {this.state.circles.map(circle=>(
          <Circle key={circle} click={()=> this.clickHandler(circle)}/>))}
        </div>
        <button id="start" onClick={this.randomizer}>PLAY</button>
        <button id="end" className="hidden">END</button>
      </div>
    );
  }
}

export default App;

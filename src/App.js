import React, { Component } from 'react';
import './App.css';
import Circle from './Circle';

class App extends Component {
    state = {
      score: 0,
      current: 0,
      showModal: false,
      circles: [1,2,3],
      gameStart: false,
      delay: 2000
    }

    modalHandler = () => {
      this.setState({
        showModal: !this.state.showModal
      })
    }

    clickHandler = (circle) => {
      console.log(circle)
      if(circle !== this.state.current){
        this.endHandler();
      }
      this.setState({
        score: this.state.score +10,
      });
      this.randomizer();
    }

    randomizer = () => {
      console.log('rand')
      let nextActive;
      do {
        nextActive = Math.floor(Math.random() * 3) + 1;
      } while (nextActive === this.state.current);
  
      this.setState({
        current: nextActive
      });
    };

    



    startHandler = () => {
      const timer = setTimeout(()=>{this.randomizer()}, 2000);
      this.setState({
        gameStart: true
      })
    };

 


    endHandler = () => {
      this.modalHandler();
      this.setState({
        gameStart: false
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
        {!this.state.gameStart && <button id="start" onClick={this.startHandler}>PLAY</button>}
        {this.state.gameStart && <button id="end" onClick={this.endHandler}>END</button>}
      </div>
    );
  }
}

export default App;

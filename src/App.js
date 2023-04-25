import React, { Component } from 'react';
import './App.css';
import Circle from './Circle';
import Modal from './Modal';

class App extends Component {
    state = {
      score: 0,
      current: 0,
      showModal: false,
      circles: [1,2,3],
      gameStart: false,
      showGameOver: false
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
      this.timer = setInterval(()=>{this.randomizer()}, 1000);
      this.setState({
        gameStart: true
      })
    };
    
    
    endHandler = () => {
      clearInterval(this.timer);
      this.modalHandler();
      this.setState({
        gameStart: false,
        showGameOver: true
      });
    };



  render() {
    return (
      <div className='App'>
        <h1>Speedgame 2.0</h1>
        <p>SCORE: <span>{this.state.score}</span></p>
        <div className='gamezone'>
          {this.state.circles.map(circle=>(
          <Circle key={circle} isActive={circle === this.state.current} click={()=> this.clickHandler(circle)}/>))}
        </div>
        {!this.state.gameStart && <button id="start" onClick={this.startHandler}>PLAY</button>}
        {this.state.gameStart && <button id="end" onClick={this.endHandler}>END</button>}
        {this.state.showGameOver && <Modal/>}
      </div>
    );
  }
}

export default App;

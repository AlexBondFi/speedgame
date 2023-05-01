import React, { Component } from 'react';
import './App.css';
import Circle from './Circle';
import Modal from './Modal';
import startSound from './start.mp3';
import endSound from './end.mp3';
import clickSound from './click.mp3'

class App extends Component {
    state = {
      score: 0,
      current: 0,
      rounds: 0,
      showModal: false,
      circles: [1,2,3,4],
      gameStart: false,
      showGameOver: false,
      soundStart: new Audio(startSound),
      soundEnd: new Audio(endSound),
      soundClick: new Audio(clickSound),
      modalVisible: false,
      speed: 1000
    }

    timer;
    

    clickHandler = (circle) => {
      this.state.soundClick.play();
      if(circle !== this.state.current){
        this.endHandler();
      }
      this.setState({
        score: this.state.score +10,
        rounds: 0
      });
    }

    randomizer = () => {
      let nextActive;
      if(this.state.rounds >=3){
        return this.endHandler()
      }
      else{
        do {

          nextActive = Math.floor(Math.random() * this.state.circles.length) + 1;

        } while (nextActive === this.state.current);
      }
      this.setState({
        current: nextActive,
        rounds: this.state.rounds +1,
        speed: this.state.speed * 0.95
      });
      this.timer = setTimeout(this.randomizer, this.state.speed)
    };

    startHandler = () => {
      this.state.soundStart.play();
      this.setState({
        gameStart: true
      })
      this.randomizer()
    };

    


    
    endHandler = () => {
      console.log('endHandler was triggered');
      this.state.soundEnd.play();
      clearTimeout(this.timer);
      this.setState({
        gameStart: false,
        showGameOver: true,
        modalVisible: !this.state.modalVisible
      });
    };

    modalHandler = () => {
      console.log('modalHandler was triggered');
      this.setState({
        modalVisible: !this.state.modalVisible,
        score: 0,
        current: 0,
        speed: 1000
      })
    }
    


  render() {
    return (
      <div className='App'>
        <h1>Speedgame 2.0</h1>
        <p>SCORE: <span>{this.state.score}</span></p>
        <div className='gamezone'>
          {this.state.circles.map(circle=>
          <Circle key={circle} gameIsOn={this.state.gameStart} active={circle === this.state.current} click={()=> this.clickHandler(circle)}/>)}
        </div>
        {!this.state.gameStart && <button id="start" onClick={this.startHandler}>PLAY</button>}
        {this.state.gameStart && <button id="end" onClick={this.endHandler}>END</button>}
        {this.state.modalVisible && <Modal score={this.state.score} modalHandler={this.modalHandler}/>}
      </div>
    );
  }
}

export default App;

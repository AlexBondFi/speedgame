import React, { Component } from 'react';
import './App.css';
import Circle from './Circle';

class App extends Component {
    state = {
      score: 0,
      activeCircle: 0,
      showModal: false,
      circles: [1,2,3],
      gameStart: false,
      pace: 2000,
      rounds: 0,
      timer: null
    }

    clickHandler = (circle) => {
      if (circle !== this.state.activeCircle) {
        this.endGame();
        return;
      }

      this.setState({
        score: this.state.score + 1,
        rounds: 0
      });

      this.disableCircles();
      this.randomizeActiveCircle();
    }

    randomizeActiveCircle = () => {
      const nextActive = this.pickNewActiveCircle(this.state.activeCircle);
      this.setState({
        activeCircle: nextActive
      });
    }

    pickNewActiveCircle = (active) => {
      let nextActive = Math.floor(Math.random() * this.state.circles.length);
      while (nextActive === active) {
        nextActive = Math.floor(Math.random() * this.state.circles.length);
      }
      return nextActive;
    }

    // enableCircles = () => {
    //   const circles = [...this.state.circles];
    //   circles.forEach((circle) => {
    //     circle.pointerEvents = 'auto';
    //   });
    //   this.setState({
    //     circles: circles
    //   });
    // }

    // disableCircles = () => {
    //   const circles = [...this.state.circles];
    //   circles.forEach((circle) => {
    //     circle.pointerEvents = 'none';
    //   });
    //   this.setState({
    //     circles: circles
    //   });
    // }

    startGame = () => {
      if (this.state.rounds >= 3) {
        this.endGame();
        return;
      }

    //   this.enableCircles();
      this.randomizeActiveCircle();

      const timer = setTimeout(this.startGame, this.state.pace - (this.state.rounds * 10));
      this.setState({
        timer: timer,
        rounds: this.state.rounds + 1
      });
    }

    startHandler = () => {
      this.setState({
        gameStart: true
      });

      const startAudio = new Audio('/path/to/start/audio');
      startAudio.play();

      this.startGame();
    };

    endGame = () => {
      if (this.state.timer) {
        clearTimeout(this.state.timer);
      }

      const endAudio = new Audio('/path/to/end/audio');
      endAudio.play();

      let scoreEndText = '';
      if (this.state.score <= 10) {
        scoreEndText = `Your score is: ${this.state.score}, try more!`;
      } else if (this.state.score > 10 && this.state.score <= 20) {
        scoreEndText = `Your score is: ${this.state.score}, not bad!!`;
      } else if (this.state.score > 20) {
        scoreEndText = `Your score is: ${this.state.score}, you're good!!!`;
      }

      this.setState({
        gameStart: false,
        scoreEndText: scoreEndText,
        showModal: true
      });
    }

    resetGame = () => {
      window.location.reload();
    }

    render() {
        return (
          <div className='App'>
            <h1>Speedgame 2.0</h1>
            <p>SCORE: <span>{this.state.score}</span></p>
            <div className='gamezone'>
              {this.state.circles.map(circle=>(
              <Circle key={circle} click={()=> this.clickHandler(circle)}/>))}
            </div>
            {!this.state.gameStart && <button id="start" onClick={this.startGame}>PLAY</button>}
            {this.state.gameStart && <button id="end" onClick={this.endGame}>END</button>}
          </div>
        );
      }
    }
    
    export default App;

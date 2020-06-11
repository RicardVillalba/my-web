import React, { Component } from "react";
import "./App.css";
import Snake from "./Snake";
import Apple from "./Apple";

const getRandomPosition = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

class App extends Component {
  state = {
    apple: getRandomPosition(),
    snakeDots: [
      [0, 0],
      [2, 0],
    ],
  };

  render() {
    return (
      <div className="gameArea">
        <Snake snakeDots={this.state.snakeDots} />
        <Apple dot={this.state.apple} />
      </div>
    );
  }
}
export default App;

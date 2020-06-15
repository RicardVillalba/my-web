import React, { Component } from "react";
import "./App.css";
import Navbar from './components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import SnakeGame from './components/SnakeGame'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home}/>
        <Route path='/snakeGame' component={SnakeGame} />
      </div>
    </BrowserRouter>
    );
  }
}
export default App;

//<NavLink to="/snakeGame">Snake</NavLink>
//<Route path="/snakeGame" component={SnakeGame} />
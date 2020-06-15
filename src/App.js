import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/Home";
import SnakeGame from "./components/SnakeGame";
import SplashScreen from "./components/SplashScreen";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={SplashScreen} />
        <div className="App">
          <Navbar />
          
          <Route path="/home" component={Home} />
          <Route path="/snakeGame" component={SnakeGame} />
        </div>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;

//<NavLink to="/snakeGame">Snake</NavLink>
//<Route path="/snakeGame" component={SnakeGame} />

import React, { Component } from "react";
import animation from "./../animation.gif";

const SplashScreen = (props) => {
  setTimeout(() => {
    props.history.push("/home");
  }, 10000);

  return (
    <div className="splash">
      <h1 className="loading">LOADING...</h1>
      <img className="gif" src={animation} alt="loading..." />
    </div>
  );
};

export default SplashScreen;

import React, { Component } from "react";
import animation2 from "./../animation2.gif";

const SplashScreen = (props) => {
  setTimeout(() => {
    props.history.push("/home");
  }, 8000);

  return (
    <div className="splash">
      <h1 className="loading">LOADING...</h1>
      <img className="gif" src={animation2} alt="loading..." />
    </div>
  );
};

export default SplashScreen;

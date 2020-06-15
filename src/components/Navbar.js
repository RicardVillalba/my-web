import React from "react";
import "./../App.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="superiorNavbar">
      <p className="name">Ricard Villalba</p>
      </div>
      <div className="navbar">
        <div className="navbarLinks">
          <div className="navbarBtn">
          <Link to="/home">Home</Link>
          </div>
          <div className="navbarBtn">
          <NavLink to="/snakeGame">SnakeGame</NavLink>
          </div>
        </div>
        <div className="navbar-logo">
          <Link to="/">Logo</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

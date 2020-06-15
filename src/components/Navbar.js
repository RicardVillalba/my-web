import React from "react";
import "./../App.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="navbar">
        <div className="navbar-btn">
          <Link to="/home">Home</Link>
        </div>
        <div className="navbar-btn">
          <NavLink to="/snakeGame">snakeGame</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

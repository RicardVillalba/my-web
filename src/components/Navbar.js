import React from 'react';
import "./../App.css";
import {Link ,NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to='/snakeGame'>snakeGame</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar
import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <ul className="right">
          <li><a href="/">Home</a></li>
          <li><a href='/snakeGame'>snakeGame</a></li>
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <div className="navigation-bar">
        <div className="navigation-left">
          <NavLink to = "/">ChatDoom</NavLink>
        </div>

        <div className="navigation-right">
          <ul>
            <li><NavLink to="/Welcome">Welcome</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Thread">Chat</NavLink></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;

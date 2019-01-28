import React, {Component} from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="w3-top">
        <div className="w3-bar w3-white w3-wide w3-padding w3-card">
          <a href="#home" className="w3-bar-item w3-button"><b>BR</b> Architects</a>
            <div className="w3-right w3-hide-small">
            <NavLink to="/" className="w3-bar-item w3-button">Home</NavLink>
            <NavLink to="/about" className="w3-bar-item w3-button">About</NavLink>
            <NavLink to="/contacts" className="w3-bar-item w3-button">Contacts</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
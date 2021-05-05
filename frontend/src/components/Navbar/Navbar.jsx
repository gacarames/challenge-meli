import React from 'react';
import './Navbar.scss';

const Navbar = (props) => (
  <nav className="nav">
    <div className="nav__wrapper">
      {props.children}
    </div>
  </nav> 
);

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbarstyle.css";


const Navbar = () => {
  return (
    <nav className="main-nav">
      {/*1st logo part*/}
      <div className="logo">
        <h2>
          <span>P</span>ortfolio
        </h2>
      </div>
      {/*2nd logo part*/}
      <div className="menu-link mobile-menu-link">
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
</nav>
  );
};

export default Navbar;
import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <a className="nav-logo" href="#about"><span>A</span>lekhya Jujjuri</a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

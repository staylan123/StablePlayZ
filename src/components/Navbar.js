import React from "react";
import "../styles/Navbar.css";
import { IoGameControllerOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <IoGameControllerOutline size={55} />
        </NavLink>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/game-servers">Game Servers</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

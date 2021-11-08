import React from "react";
import "../styles/Navbar.css";
import { IoGameControllerOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <a href="/home">
          <IoGameControllerOutline size={50} />
        </a>
        <a href="/getting-started">Getting Started</a>
        <a href="/FAQ">FAQ</a>
        <a href="/about-us">About Us</a>
      </div>
    </div>
  );
}

export default Navbar;

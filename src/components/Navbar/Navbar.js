import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { NavLinks } from "./NavLinks";
import { FaBars, FaTimesCircle } from "react-icons/fa";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  // Creates an li Link for ever item the NavLink.js object array (index is for map key)
  const createNavLinks = NavLinks.map(({ navItemName, url }, index) => {
    return (
      <li className="navItem" key={index}>
        <NavLink to={url}>{navItemName}</NavLink>
      </li>
    );
  });

  return (
    <navbar className="navBar">
      <div className="logo">
        <NavLink to="/">
          Stable<span>PlayZ</span>
        </NavLink>
      </div>
      <button onClick={toggleMenu} className="hamburger">
        {isMobile ? <FaTimesCircle size={25} /> : <FaBars size={25} />}
      </button>
      {!isMobile && (
        <div className="navBarLinks">
          <ul>{createNavLinks}</ul>
        </div>
      )}
    </navbar>
  );
}

export default Navbar;

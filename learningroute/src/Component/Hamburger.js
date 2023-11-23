import React, { useState } from "react";

// import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMCymWwv5mhIXkGffWxsumoBE-2LMcKY3gTouyu56&s"
        alt=""
      />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      

    </nav>
  );
};
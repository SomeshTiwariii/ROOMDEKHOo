import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai"; // close icon

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        {/* Logo */}
        <img src="./logo.png" alt="logo" width={100} height={100} />

        {/* Menu */}
        <div className={`flexCenter h-menu ${menuOpen ? "open" : ""}`}>
          <a href="#residencies">Residencies</a>
          <a href="#contact">Contact Us</a>
          <a href="#get-started">Get Started</a>
          <a href="#about">About Us</a>
          <button className="button">
            <a href="#contact">Contact</a>
          </button>
        </div>

        {/* Mobile Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <AiOutlineClose size={30} color="white" /> : <BiMenuAltRight size={30} color="white" />}
        </div>
      </div>
    </section>
  );
};

export default Header;

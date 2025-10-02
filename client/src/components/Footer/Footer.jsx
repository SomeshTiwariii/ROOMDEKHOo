import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo.png" alt="RoomDekho Logo" width={120} />
          <span className="secondaryText">
            Our vision at RoomDekho is to make finding<br />
            the right place to live simple, smart, and stress-free.
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            Dehradun, Uttarakhand, India
          </span>
          <div className="flexCenter f-menu">
            <span>Residencies</span>
            <span>Services</span>
            <span>About Us</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

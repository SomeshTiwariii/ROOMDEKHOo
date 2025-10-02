import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with RoomDekho</span>
          <span className="secondaryText">
            Subscribe today and unlock smart, hassle-free property solutions.<br />
            Find your perfect space with RoomDekho—faster, easier, smarter.
          </span>
          <button className="button" href>
            <a href="roomdekho@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

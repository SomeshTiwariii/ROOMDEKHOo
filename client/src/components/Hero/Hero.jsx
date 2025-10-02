import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">

        {/* Left section */}

        <div className="flexColStart hero-left">
            <div className="hero-title">
                <div className="orange-circle"/>
                <h1>Discover <br/>The Most Suitable <br/> Property</h1>
            </div>
            <div className="flexColStart hero-des">
                <span className= "secondaryText">Find properties that match your lifestyle</span>
                <span className="secondaryText">Say goodbye to the hassle of house hunting</span>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" />
                    <button className="button">Search</button>
                </div>


        </div>

        {/* Right section */}

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import "../styles/Home.css"; // Import the CSS file for the Banner component
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        <p className="banner-text-small">
          THE BEST DEALS ON THE WORLD'S BEST DESTINATIONS
        </p>
        <h1 className="banner-text-large">
          Best travel and <br />
          destinations
        </h1>
        <p className="content">
          With WanderPlan you can experience new travel and <br />
          the best tourist destinations that we have to offer
        </p>
        <Link to="/destination">
        <button className="destination-button">
          Our Destination
          <span className="destination-button-arrow"><img src="/img/Continue.png" alt="arrow" style={{ width: '24px', height: '24px' }} /></span>
        </button>
        </Link>
        <Link to="/gallery">
        <button className="gallery-button">
        <span className="gallery-button-play"><img src="/img/play.png" alt="play" style={{ width: '24px', height: '24px' }} /></span>
          Our Gallery
        </button>
        </Link>
      </div>
      <div className="banner-image">
        <img src="/img/Traveller1.png" alt="Banner"/>
      </div>
    </div>
  );
};

export default Banner;

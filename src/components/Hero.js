import React from 'react';
import LandingImage from '../assets/images/landingPage.jpg';
import ShieldImage from '../assets/images/shield.svg';
function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <img src={LandingImage} alt="landingPage" />
      <div className="heroContent">
        <h1>We are revolutionizing</h1>
        <h1>Local business</h1>
        <div className="subhead mt-5">
          <p>
            Spruce Box is an Oregon-based B-Corp dedicated to getting you the
            goods and services you need while always delivering with excellence,
            efficiency, and sustainability.
          </p>
        </div>
        <button className="mt-5">Learn More About Us</button>
      </div>
      <div className="covid mt-5">
        <p>
          <img src={ShieldImage} alt="shield" />
          Coronavirus (COVID-19) resources and updates
        </p>
        <p>
          The safety and well-being of everyone who uses Spruce Box Now is
          always our priority.
          <br />
          We are actively monitoring the coronavirus (COVID-19) situation. Click
          here for more information.
        </p>
      </div>
    </section>
  );
}

export default Hero;

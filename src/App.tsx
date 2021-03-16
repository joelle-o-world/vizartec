import React from 'react';

import './homepage.sass'

import EcoIcon from './img/eco-icon.svg';
import LogoBig from './img/logo-big.svg';
import HeroImg from './img/HeroImage.svg';
import AuroraBG1 from './img/aurora1.svg';

function App() {
  return (
    <div className="vzt-site">
      <header className='vzt-notice-banner'>
        <img src={EcoIcon} alt="" className="vzt-icon" />
        <strong>PLEASE NOTE:</strong> 
        <p>This site is energy responsible by using low energy OLED colours</p>
      </header>

      <main className='vzt-main-content'>
        
        <header className='vzt-hero' id="vzt-main-hero">
          <div className="vzt-hero-text">
            <h1>
              <img src={LogoBig} alt="VIZARTEC" className="vzt-main-heading" />
            </h1>
            <h2>We design and develop compelling <strong>custom websites</strong></h2>
            <p>Having a well-crafted website can be the difference between <strong>failure or success?</strong></p>
            <button className="vzt-read-more">Read More</button>
          </div>
          <img className="vzt-bg vzt-hero-image" src={HeroImg} alt="" />
        </header>

        <div className="vzt-center-info">
          <h2>Why <strong>custom</strong> <u>works better</u></h2>
          <p>A large part of web design is understanding psychological and visual characteristics. Regardless of how unique a person is, he/she is bound by certain human behaviors and tendencies. A great design takes these factors, including trial-and-tested design principles into account to create amazing visual experiences. Without understanding these techniques, it is near impossible to create <strong>well-crafted websites.</strong></p>
        </div>
      </main>
    </div>
  );
}

export default App;

import React from 'react';

import './homepage.sass'

import EcoIcon from './img/eco-icon.svg';
import LogoBig from './img/logo-big.svg';
import HeroImg from './img/HeroImage.svg';
import AuroraBG1 from './img/aurora1.svg';
import AestheticUsabilityIcon from './img/aesthetic-usability-icon.svg';
import FittsLawIcon from './img/fitts-law-icon.svg';
import GoalGradientIcon from './img/goal-gradient-icon.svg';
import MillersLawIcon from './img/millers-law-icon.svg';
import UIDesignIcon from './img/uidesign-icon.png';
import FullStackDevelopmentIcon from './img/fullstackdevelopement-icon.svg';
import RitterDeepReadingLogo from './img/RitterDeepReading-logo.png'
import GermanFlagCircular from './img/germany-flag-circular.png';
import RitterScreenshot from './img/rdr-screenshot@2x.png';
import {ContactForm} from './components/ContactForm';
import {VizartecFooter} from './components/VizartecFooter';

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
          <button className="vzt-btn-more-items">Read More</button>
        </div>

        <div id="vzt-techniques">
          <p>Here are just a few of the clinically proven techniques used in <strong>exceptional web design</strong> (UI/UX)</p>
          <ul>
            <li>
              <img className='vzt-icon' src={AestheticUsabilityIcon} alt="" />
              <p>Aesthetic-Usability Effect</p>
              <button>Read More</button>
            </li>
            <li>
              <img className='vzt-icon' src={FittsLawIcon} alt=""/>
              <p>Fitt's Law</p>
              <button>Read More</button>
            </li>
            <li>
              <img className='vzt-icon' src={GoalGradientIcon} alt=""/>
              <p>Goal-Gradient Effect</p>
              <button>Read More</button>
            </li>
            <li>
              <img className='vzt-icon' src={MillersLawIcon} alt=""/>
              <p>Miller's Law</p>
              <button>Read More</button>
            </li>
          </ul>
          <button className="vzt-btn-more-items">View More</button>
        </div>

        <div id="vzt-why-us">
          <h2>Why <strong>Us</strong></h2>
          <p>We are <strong>specialists</strong> and totally dedicated to our craft and our clients, <strong>our track-record is impeccable.</strong></p>

          <div className="vzt-info-boxes">
            <div className="vzt-info-box vzt-blue-info-box">
              <img className="vzt-icon" src={UIDesignIcon} />
              <h3>UI/UX - DESIGN</h3>

              <div className="vzt-inset-box">
                <p>Our designers are talented, experienced and up-to-date with contemporary design principles. We never sacrifice on quality or originality. We make sure we understand the goals of our clients and the requirements of their target audiences. Once we have a clear direction, we execute with a passion.</p>
              </div>
            </div>
            <div className="vzt-info-box">
              <img className="vzt-icon" src={FullStackDevelopmentIcon} />
              <h3>Full Stack Development</h3>
              <div className="vzt-inset-box">
              <p>Our developers are bar none and the backbone of any website. We are able to develop from scratch or manipulate any platform available. Whether front-end or back-end, our developers can handle even the most complex tasks with relative ease. If you can imagine it, we can create it.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="vzt-recent-projects">
          <h2>Recent <strong>Projects</strong></h2>
          <p>We work with you to create tools and experiences that <strong>prompt users to action.</strong></p>

          <ol className="vzt-recent-projects-list">
            <li className="vzt-project" id="ritter-deep-reading">
              <img className="vzt-project-logo" src={RitterDeepReadingLogo} />
              <div className="vzt-project-info-bar">
                <span className="vzt-project-info-field vzt-project-location">
                  <span className="vzt-project-info-label">Location:</span>
                  <span className="vzt-project-info-value">
                    <img src={GermanFlagCircular} className="vzt-flag-icon" />
                    Munich - Germany
                  </span>
                </span>
              </div>

              <a className="vzt-recent-project-link" href="http://deepreading.de">
                <img src={RitterScreenshot} className="vzt-site-thumbnail" />
                <button className="vzt-visit-site">Visit Site {'>'}</button>
              </a>

              <div className="vzt-project-objectives">
                <h3>Primary Objectives:</h3>
                <ul className="vzt-objectives-list vzt-checklist">
                  <li>{" To create an aesthetic feel that would combine the scientific nature of the service while retaining a modern and approachable sense. "}</li>
                  <li>{"To develop tools that would engage the user while demonstrating the functionality as well as the user's need for the service."}</li>
                  <li>{"To create an effective booking platform that can be managed by the client"}</li>
                </ul>

                <div className="vzt-project-keywords">
                  <h3>Keywords</h3>
                  <ul className="vzt-keywords-list vzt-comma-list">
                    <li>UI</li>
                    <li>UX</li>
                    <li>Web-App</li>
                    <li>CMS</li>
                  </ul>
                </div>
              </div>
            </li>
          </ol>
        </div>

        <div className="vzt-contact">
          <h2>We <strong>surpass</strong> the norm</h2>
          <p>We supersede the average and we create goal-driven art that tells stories, stirring the human spirit.</p>
          <p>{"There is no comparison between mediocre, and a living, functional digital ecosystem. "}</p>
          <p className="vzt-green-text">
            Never understimate <strong>the emotional effect of visual impact.</strong>
          </p>

          <ContactForm />
        </div>

        <VizartecFooter />

      </main>
    </div>
  );
}

export default App;

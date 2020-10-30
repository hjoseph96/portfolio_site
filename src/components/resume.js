import React from "react"

import Layout from './layout';

import 'animate.css/animate.css'
import './resume.scss'

import turingLogo from '../images/turing_logo.png';
import turingGear from '../images/turing_gear.png';
import canopyLogo from '../images/canopy.png';
import vosLogo from '../images/vosvx.png';
import politechLogo from '../images/politech.png';
import beatthreadLogo from '../images/beatthread.png';
import kitsplitLogo from '../images/kitsplit.png';
import arcaneLogo from '../images/arcane_arcade.png';

import rubyLogo from '../images/ruby.png';
import nodeLogo from '../images/nodejs.png';
import reactLogo from '../images/react.png';
import mysqlLogo from '../images/mysql.png';
import postgresLogo from '../images/postgres.png';
import awsLogo from '../images/aws.png';
import asanaLogo from '../images/asana.png';
import basecampLogo from '../images/basecamp.png';
import trelloLogo from '../images/trello.png';
import jiraLogo from '../images/jira.png';


class Resume extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  collapseCard(e) {
    let caret = e.target.offsetParent.querySelector('i');
    let cardContent = e.target.offsetParent.querySelector('#collapsible-card');

    if (caret.classList.contains('fa-angle-down')) {
      this.hideCardContent(caret, cardContent);
    } else {
      this.showCardContent(caret, cardContent);
    }
  }

  hideCardContent(caret, cardContent) {
    cardContent.classList.add('animate__faster','animate__animated', 'animate__fadeOut');

    cardContent.addEventListener('animationend', () => {
      caret.className = "fa fa-angle-up";
      cardContent.classList.add('is-hidden');
      cardContent.classList.remove('animate__animated', 'animate__fadeOut', 'animate__faster');
    });
  }

  showCardContent(caret, cardContent) {
    cardContent.classList.remove('is-hidden')
    cardContent.classList.add('animate__faster', 'animate__animated', 'animate__fadeIn');

    cardContent.addEventListener('animationend', () => {
      caret.className = "fa fa-angle-down";
      cardContent.classList.remove('is-hidden')

      cardContent.classList.remove('animate__animated', 'animate__fadeIn', 'animate__faster');
    });
  }

  render() {
    return (
      <Layout>
        <div id="outer">
          <div id="inner_fixed">
            <h1>Past Work</h1>
          </div>


          <ul id="inner_remaining" className="past-work">
            <li className="gap_time">
              <div className="card">
              	<header className="card-header" onClick={this.collapseCard.bind(this)}>
                  <div className="brand">
                    <div className="arcane-logo">
                      <img src={arcaneLogo}></img>
                    </div>
                  </div>

              		<p className="card-header-title">
                    Arcane Arcade - Senior Software Engineer
              		</p>

                  <div className="timeframe">
                    <div className="start-time">July 2018</div>
                    <div className="divider">—</div>
                    <div className="start-time">Current</div>
                  </div>

              		<a data-action="collapse" class="card-header-icon" onClick={this.collapseCard.bind(this)}>
              			<span className="icon">
              				<i ref="caret" className="fa fa-angle-up" aria-hidden="true"></i>
              			</span>
              		</a>
              	</header>
              	<div id="collapsible-card" className="is-hidden">
              		<div className="card-content">
                    <p className="business-detail">
                      Arcane Arcade is an online e-commerce platform for video game
                      developers and publishers to sell their games for cryptocurrency.
                    </p>

                    <p className="responsibilities">
                      <h3>Responsibilities</h3>

                      I architected the app to work in three servers.<br/><br/>

                      I built a Node.js API in Express to handle cryptocurrency payments and transaction tracking.
                      It generates Bitcoin and Monero escrow addresses, and scans for awaited transacations of a specified amount.
                      Once the payment is detected, we send the money to the seller after taking a fee.<br/><br/>

                      We use a Rails 6 API and JSON Web Token authorization. This server speaks to the front-end and interfaces
                      with the Node API for payments.<br/><br/>

                      The final server is our React front-end. We use mobx-state-tree to manage state, and built a multi-page front-end using
                      React Router. It is blazing fast and will serve as a foundation for the React Native mobile app in the future.<br/><br/>

                      These three servers work in concert, all hosted on separate servers with nginx and interface with each other by Authorization headers.
                    </p>

                    <ul className="tech-utilized">
                      <li className="ruby">
                        <img src={rubyLogo}></img>
                      </li>
                      <li className="node">
                        <img src={nodeLogo}></img>
                      </li>
                      <li className="react">
                        <img src={reactLogo}></img>
                      </li>
                      <li className="postgres">
                        <img src={postgresLogo}></img>
                      </li>
                      <li className="trello">
                        <img src={trelloLogo}></img>
                      </li>
                    </ul>

                    <footer className="card-footer">
                      <p className="card-footer-item">
                        <span>
                          <a href="https://staging.arcanearcade.io" target="_blank">View</a>
                        </span>
                      </p>
                    </footer>
                  </div>
              		</div>

              </div>

            </li>
            <li className="kitsplit">

              <div className="card">
                <header className="card-header" onClick={this.collapseCard.bind(this)}>
                  <div className="brand">
                    <div className="kitsplit-logo">
                      <img src={kitsplitLogo}></img>
                    </div>
                  </div>

                  <p className="card-header-title">
                    KitSplit - Full Stack Engineer
                  </p>

                  <div className="timeframe">
                    <div className="start-time">October 2017</div>
                    <div className="divider">—</div>
                    <div className="start-time">July 2018</div>
                  </div>

                  <a data-action="collapse" class="card-header-icon" onClick={this.collapseCard.bind(this)}>
                    <span className="icon">
                      <i ref="caret" className="fa fa-angle-up" aria-hidden="true"></i>
                    </span>
                  </a>
                </header>
                <div id="collapsible-card" className="is-hidden">
                  <div className="card-content">
                    <p className="business-detail">
                      KitSplit is a rental platform for filmmakers and digital content creators. Independent filmmakers looking to rent equipment for their shoots,
                      youtube creators looking to rent equipment for their videos, and more are the typical audience. Gear owners list their equipment on the platform,
                      renters select their pickup & drop-off dates and pay by the day.

                      AirBnB for camera and film equipment rentals.
                    </p>

                    <p className="responsibilities">
                      <h3>Responsibilities</h3>

                      As a Full Stack engineer, I was responsible for revamping the front-end to the designer's specifications.
                      I was best suited for the front-end development, as I was able to knock them out quickly and get closest
                      to pixel perfection.<br/><br/>

                      I contributed to the Leaflet.js map, which shows the location of all the
                      listings currently on the search page (as a camera icon), having it re-render as it is moved by the user.<br/><br/>

                      I implemented autocomplete for Google Maps locations, the form date pickers, and most front-end JS tasks.
                      Mostly using React, related react libraries and ES6.<br/><br/>

                    I had equal involvement with backend development, often picking up OAuth sign up or new platform features from the Asana
                      board. Crafted the inner workings of our Sphinx-based search, creating a "favorites" and "follow"
                      feature for listings and profiles.
                    </p>

                    <ul className="tech-utilized">
                      <li className="ruby">
                        <img src={rubyLogo}></img>
                      </li>
                      <li className="react">
                        <img src={reactLogo}></img>
                      </li>
                      <li className="mysql">
                        <img src={mysqlLogo}></img>
                      </li>
                      <li className="aws">
                        <img src={awsLogo}></img>
                      </li>
                      <li className="asana">
                        <img src={asanaLogo}></img>
                      </li>
                    </ul>

                    <footer className="card-footer">
                      <p className="card-footer-item">
                        <span>
                          <a href="https://kitsplit.com" target="_blank">View</a>
                        </span>
                      </p>
                    </footer>
                  </div>
                </div>
              </div>

            </li>
            <li className="politech">
              <div className="card">
                <header className="card-header" onClick={this.collapseCard.bind(this)}>
                  <div className="brand">
                    <div className="politech-logo">
                      <img src={politechLogo}></img>
                    </div>
                  </div>

                  <p className="card-header-title">
                    Politech - Full Stack Engineer
                  </p>

                  <div className="timeframe">
                    <div className="start-time">November 2016</div>
                    <div className="divider">—</div>
                    <div className="start-time">October 2017</div>
                  </div>

                  <a data-action="collapse" class="card-header-icon" onClick={this.collapseCard.bind(this)}>
                    <span className="icon">
                      <i ref="caret" className="fa fa-angle-up" aria-hidden="true"></i>
                    </span>
                  </a>
                </header>
                <div id="collapsible-card" className="is-hidden">
                  <div className="card-content">
                    <p className="business-detail">
                      Politech creates digital products and delivers technology solutions that help political organizations, issue advocacy campaigns, and nonprofits thrive in a digitally driven world.
                    </p>

                    <p className="responsibilities">
                      <h3>Responsibilities</h3>
                      Developed political campaign management toolsets: canvassing voters and GEOJson for geographic districts in leaflet.js.<br/><br/>

                      Built Complex HTML forms for searching for voters by age, district, political leaning and more.<br/><br/>

                      Rails 5 backend, HAML templates and vanilla ES6 Javascript

                    </p>

                    <ul className="tech-utilized">
                      <li className="ruby">
                        <img src={rubyLogo}></img>
                      </li>
                      <li className="postgres">
                        <img src={postgresLogo}></img>
                      </li>
                      <li className="basecamp">
                        <img src={basecampLogo}></img>
                      </li>
                    </ul>

                    <footer className="card-footer">
                      <p className="card-footer-item">
                        <span>
                          <a href="https://politech.io" target="_blank">View</a>
                        </span>
                      </p>
                    </footer>
                  </div>
                </div>
              </div>

            </li>

            <li className="vosvx">
              <div className="card">
                <header className="card-header" onClick={this.collapseCard.bind(this)}>
                  <div className="brand">
                    <div className="vosvx-logo">
                      <img src={vosLogo}></img>
                    </div>
                  </div>

                  <p className="card-header-title">
                    VOS Digital Group - Ruby Engineer
                  </p>

                  <div className="timeframe">
                    <div className="start-time">April 2016</div>
                    <div className="divider">—</div>
                    <div className="start-time">July 2017</div>
                  </div>

                  <a data-action="collapse" class="card-header-icon" onClick={this.collapseCard.bind(this)}>
                    <span className="icon">
                      <i ref="caret" className="fa fa-angle-up" aria-hidden="true"></i>
                    </span>
                  </a>
                </header>
                <div id="collapsible-card" className="is-hidden">
                  <div className="card-content">
                    <p className="business-detail">
                      VOS Digital Group was working on a platform: VOSVX (which is now Icaro Media Group). Their platform
                      allows licensing of videos to news and media outlets.
                    </p>

                    <p className="responsibilities">
                      <h3>Responsibilities</h3>

                      VOSVX had a Sinatra-based microservice responsible for transcoding of videos with ffmpeg and an ingestion process of assigning
                      relevant categories and to all videos. I maintained and extended this app, to a v# version of their API.<br/><br/>

                      VOSVX's main app was Rails 3.2 with Backbone.js components. I was the resident front-end engineer, often creating new pages and working with Backbone.<br/><br/>

                      There was also a marketing static site I maintained, built with Middleman.
                    </p>

                    <ul className="tech-utilized">
                      <li className="ruby">
                        <img src={rubyLogo}></img>
                      </li>
                      <li className="mysql">
                        <img src={mysqlLogo}></img>
                      </li>
                      <li className="jira">
                        <img src={jiraLogo}></img>
                      </li>
                    </ul>

                    <footer className="card-footer">
                      <p className="card-footer-item">
                        <span>
                          <a href="https://www.icaromediagroup.com/en/" target="_blank">View</a>
                        </span>
                      </p>
                    </footer>
                  </div>
                </div>
              </div>

            </li>
            <li className="canopy">
              <div className="card">
                <header className="card-header" onClick={this.collapseCard.bind(this)}>
                  <div className="brand">
                    <div className="canopy-logo">
                      <img src={canopyLogo}></img>
                    </div>
                  </div>

                  <p className="card-header-title">
                    Canopy - Junior Software Engineer
                  </p>

                  <div className="timeframe">
                    <div className="start-time">November 2015</div>
                    <div className="divider">—</div>
                    <div className="start-time">March 2016</div>
                  </div>

                  <a data-action="collapse" class="card-header-icon" onClick={this.collapseCard.bind(this)}>
                    <span className="icon">
                      <i ref="caret" className="fa fa-angle-up" aria-hidden="true"></i>
                    </span>
                  </a>
                </header>
                <div id="collapsible-card" className="is-hidden">
                  <div className="card-content">
                    <p className="business-detail">
                      Canopy provides total lawn care and landscaping, from maintaining your lawn to enhancing it. Environmentally responsible methods and intelligent processes make you worry-free!
                    </p>

                    <p className="responsibilities">
                      <h3>Responsibilities</h3>

                      Canopy was working on a SMS-based app, built in Sinatra called <a href="https://lawnee.com" target="_blank">Lawnee</a>.
                      It interfaced with Twilio to allow customers to book lawn care appointments via text. I maintained and expanded this application.<br/><br/>

                      I worked on Mandrill email templates and bringing designs to pixel-perfection on trycanopy.com.
                    </p>

                    <ul className="tech-utilized">
                      <li className="ruby">
                        <img src={rubyLogo}></img>
                      </li>
                      <li className="mysql">
                        <img src={mysqlLogo}></img>
                      </li>
                    </ul>

                    <footer className="card-footer">
                      <p className="card-footer-item">
                        <span>
                          <a href="https://www.canopylawncare.com/" target="_blank">View</a>
                        </span>
                      </p>
                    </footer>
                  </div>
                </div>
              </div>
            </li>
            <li className="turing">
              <div className="card">
                <header className="card-header" onClick={this.collapseCard.bind(this)}>
                  <div className="brand">
                    <div className="turing">
                      <div className="logo">
                        <img src={turingLogo}></img>
                      </div>

                      <div className="gear">
                        <img src={turingGear}></img>
                      </div>
                    </div>
                  </div>

                  <p className="card-header-title">
                    Turing School
                  </p>

                  <div className="timeframe">
                    <div className="start-time">Sept 2014</div>
                    <div className="divider">—</div>
                    <div className="start-time">March 2015</div>
                  </div>

                  <a data-action="collapse" class="card-header-icon" onClick={this.collapseCard.bind(this)}>
                    <span className="icon">
                      <i ref="caret" className="fa fa-angle-up" aria-hidden="true"></i>
                    </span>
                  </a>
                </header>
                <div id="collapsible-card" className="is-hidden">
                  <div className="card-content">
                    <p className="business-detail">
                      Turing School is a 7-month in-depth program to learn Computer Science basics and the ins and outs of web development.
                    </p>

                    <p className="responsibilities">
                      <h3>Bootcamp</h3>

                      We were taught basics of Computer Science and Ruby as a standalone language, before touching any websites. We drilled hard on data structures and algorithms.
                      <br/><br/>

                      Then, we learned HTTP and the basics of web development using Sinatra.<br/><br/>

                      Next, we moved on to Rails and grew to understand the underlying mechanics behind "rails magic". Finally, we learned about Javscript MVC frameworks (Ember.js as the time. Can you believe it?), and client-side Javascript.
                      <br/><br/>

                      <a href="http://1409-story.turing.io/" target="_blank">This</a> is a video series detailing my time at Turing, it was a great experience.
                    </p>
                    <br/>
                    <footer className="card-footer">
                      <p className="card-footer-item">
                        <span>
                          <a href="https://turing.io/" target="_blank">View</a>
                        </span>
                      </p>
                    </footer>
                  </div>
                </div>
              </div>

            </li>
          </ul>
        </div>

      </Layout>
    )
  }

}

export default Resume

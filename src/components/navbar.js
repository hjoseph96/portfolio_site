/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from '@reach/router';

import 'compass-mixins/lib/compass/_css3.scss';
import "./navbar.scss"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <nav className="navbar main-nav" role="navigation" aria-label="main navigation">
        <div className="navbar-left align-section">
          <div className="links">
            <Link to="/contact/">Contact</Link>
            <Link to="/resume/">Resume</Link>
          </div>
        </div>

        <div className="navbar-center align-section">
          <div className="first name">
            Herbert
          </div>

          <a href="/">
            <svg version="1.1" className="svg-triangle-loader" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="74px" viewBox="0 0 64 64">
              <polygon className="svg-inner-stroke" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="10" points="61.1,56.7 2.9,56.7 32,6 "/>

              <polygon className="svg-outer-stroke" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="10" points="61.1,56.7 2.9,56.7 32,6 "/>
              <circle className="svg-dot" fill="#FF0000" cx="32" cy="38.3" r="3"/>
            </svg>
          </a>

          <div className="last name">
            Joseph
          </div>

        </div>

        <div className="navbar-right align-section">
          <div className="social">
            <a href="https://twitter.com/JTechniquea2z" className="icon-button twitter" target="noreferrer">
              <i className="icon-twitter fa fa-twitter"></i>
              <span></span>
            </a>

            <a href="https://github.com/zoegod911/" className="icon-button github" target="_blank" rel="noreferrer">
              <i className="icon-github fa fa-github"></i>
              <span></span>
            </a>
          </div>
        </div>
      </nav>
    )
  }

}

export default Navbar

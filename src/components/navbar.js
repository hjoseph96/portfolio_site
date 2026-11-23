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
import makeshiftLogo from '../images/makeshift_records.png';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(e) {
    if (e.key === 'Escape') this.closeMenu();
  }

  toggleMenu() {
    this.setState(({ menuOpen }) => ({ menuOpen: !menuOpen }));
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <nav className="navbar main-nav" role="navigation" aria-label="main navigation">
        <div className="navbar-left align-section">
          <button
            type="button"
            className={`burger ${this.state.menuOpen ? 'is-open' : ''}`}
            aria-label={this.state.menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={this.state.menuOpen}
            aria-controls="mobile-menu"
            onClick={this.toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

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
            <a href="https://github.com/hjoseph96" className="icon-button github" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="icon-github fa fa-github"></i>
              <span></span>
            </a>
            <a href="https://makeshift.software" className="icon-button makeshift" target="_blank" rel="noreferrer" aria-label="Makeshift Software">
              <img src={makeshiftLogo} alt="" className="icon-makeshift" />
              <span></span>
            </a>
          </div>
        </div>

        <div id="mobile-menu" className={`mobile-menu ${this.state.menuOpen ? 'is-open' : ''}`}>
          <Link to="/contact/" onClick={this.closeMenu}>Contact</Link>
          <Link to="/resume/" onClick={this.closeMenu}>Resume</Link>
        </div>
      </nav>
    )
  }

}

export default Navbar

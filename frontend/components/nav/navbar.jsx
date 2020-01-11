import React from 'react';
import { Link } from 'react-router-dom';

const LOGO_PATH = "https://upload.wikimedia.org/wikipedia/commons/9/95/Stockx_logo.png"

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <div id="navbar-div">
        <span id="logo-span">
          <Link to="/"><img src={LOGO_PATH} /></Link>
        </span>
        <span id="navbar-search-span">
          <span id="navbar-search-outer">
            <span id="navbar-search-icon"><i className="fas fa-search"></i></span>
            <input type="text" name="search" placeholder="Search for brand, color, etc." id="navbar-search" />
          </span>
        </span>
        <span id="navbar-nav-ele">
          <ul id="navbar-els1">
            <Link to="/">
              <li id="navbar-browse" className="navbar-dropdown">Browse</li>
            </Link>
            <Link to="/">
              <li id="navbar-news">News</li>
            </Link>
            <Link to="/profile/portfolio">
              <li id="navbar-portfolio">Portfolio</li>
            </Link>
            <Link to="/">
              <li id="navbar-about" className="navbar-dropdown">About</li>
            </Link>
            <Link to="/">
              <li id="navbar-help">Help</li>
            </Link>
            <Link to="/profile">
              <li id="navbar-my-account" className="navbar-dropdown">My Account</li>
            </Link>
          </ul>
          <span id="navbar-els2">
            <Link to="/">
              <button id="navbar-sell-btn">Sell</button>
            </Link>
          </span>
        </span>
      </div>
    );
  }


}
import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const LOGO_PATH = "https://upload.wikimedia.org/wikipedia/commons/9/95/Stockx_logo.png"

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleHelp = this.handleHelp.bind(this);
    // this.setState({loggedIn: this.props.loggedIn});

  }

  handleLogout() {
    this.props.logout();
  }

  // componentDidUpdate() {
  //   this.props.checkLogin();
  // }

  componentDidUpdate() {
    if (this.state.loggedIn != this.props.loggedIn) this.setState({loggedIn: this.props.loggedIn});
  }

  handleSearch(e) {
    e.preventDefault();
    window.location.hash = "#/products/search";

    
  }

  handleHelp(e) {
    e.preventDefault();
    alert(`Don't worry, you can't actually buy anything.`);
  }

  render() {
    // console.log(this.state.loggedIn);
    return (
      <div id="navbar-div">
        <span id="logo-span">
          <Link to="/"><img src={LOGO_PATH} /></Link>
        </span>
        <span id="navbar-search-span">
          <span id="navbar-search-outer">
            <form id="search-form" onSubmit={this.handleSearch}>
              <span id="navbar-search-icon"><i className="fas fa-search"></i></span>
              <input type="text" name="search" placeholder="Search for brand, color, etc." id="navbar-search" />
              <input type="submit" style={{display: 'none'}} />
            </form>
          </span>
        </span>
        <span id="navbar-nav-ele">
          <ul id="navbar-els1">
            <Link to="/products">
              <li id="navbar-browse" className="navbar-dropdown">Browse</li>
            </Link>
            <a href="https://news.google.com/">
              <li id="navbar-news">News</li>
            </a>
            <Link to="/profile/portfolio">
              <li id="navbar-portfolio">Portfolio</li>
            </Link>
            <Link to="/about">
              <li id="navbar-about" className="navbar-dropdown">About</li>
            </Link>
            <a href="#" onClick={this.handleHelp}>
              <li id="navbar-help">Help</li>
            </a>
            {this.state.loggedIn ? 
            <Link to="/profile">
              <li id="navbar-my-account" className="navbar-dropdown">My Account</li>
            </Link> : <span id="navbar-auth"><Link to="/login"><li id="navbar-login">Login</li></Link>
                <Link to="/register"><li id="navbar-register">Register</li></Link></span>}
          </ul>
          <span id="navbar-els2">
            <Link to="/profile/listings/new">
              <button id="navbar-sell-btn">Sell</button>
            </Link>
          </span>
        </span>
        
      </div>
    );
  }


}
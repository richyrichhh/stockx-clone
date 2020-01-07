import React from 'react';
import { Link } from 'react-router-dom';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <Link to="/profile">Profile</Link>
      )
    } else {
      return (
        <div id="splash-div">
          <Link to="/login">Log In</Link>
          <Link to="/register">Register</Link>
        </div>
      )
    }
  }
}
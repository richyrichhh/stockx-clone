import React from 'react';
import { Link } from 'react-router-dom';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if (this.props.loggedIn) {
    //   return (
    //     <div id="splash-div">
    //       <Link to="/profile">Profile</Link>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div id="splash-div">
    //       <Link to="/login">Log In</Link>
    //       <Link to="/register">Register</Link>
    //     </div>
    //   )
    // }
    return (
      <div id="splash-div">
        <img src="https://wallpapercave.com/wp/wp3408855.jpg"/>
      </div>
    )
  }
}
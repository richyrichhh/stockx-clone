import React from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.dir(this.props);
    // console.log(this.props.match.path);
 

    // console.log(selected);
    return (
      <div id="profile-main-div">
        <p>Hi, {this.props.currentUser.username}</p>
        <Link to="/profile/edit">Edit Profile</Link>
        <button id="temp-logout-btn" onClick={this.props.logout}>Log Out</button>
      </div>
    )
  }
}
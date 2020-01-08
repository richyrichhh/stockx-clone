import React from 'react';
import { Link } from 'react-router-dom';
import ProfileNav from './profile_nav'

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.dir(this.props);
    // console.log(this.props.match.path);
    let selected = this.props.match.path.split('/');
    selected = selected[selected.length - 1];
    // console.log(selected);
    return (
      <div id="profile-div">
        <p>Hi, {this.props.currentUser.username}</p>
        <ProfileNav selected={selected} />
        <Link to="/profile/edit">Edit Profile</Link>
        <button id="temp-logout-btn" onClick={this.props.logout}>Log Out</button>
      </div>
    )
  }
}
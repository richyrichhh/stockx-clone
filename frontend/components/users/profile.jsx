import React from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="profile-div">
        <p>Hi, {this.props.currentUser.username}</p>

        <button id="temp-logout-btn" onClick={this.props.logout}>Log Out</button>
      </div>
    )
  }
}
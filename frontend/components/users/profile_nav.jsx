import React from 'react';
import { Link } from 'react-router-dom';

export default class ProfileNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bold: this.props.selected };
    // console.dir(this.props)
    this.changeBold = this.changeBold.bind(this);
  }

  changeBold(tab) {
    return e => this.setState({ bold: tab })
  }

  render() {
    let selected = this.state.bold
    return (
      <ul id="profile-nav-bar">
        <li className="profile-nav-item"><Link to="/profile/listings"><span onClick={this.changeBold("listings")} style={selected === "listings" ? { fontWeight: "bold" } : { fontWeight: "normal" }}>Listings</span></Link></li>
        <li className="profile-nav-item"><Link to="/profile"><span onClick={this.changeBold("profile")} style={selected === "profile" ? { fontWeight: "bold" } : { fontWeight: "normal" }}>Profile</span></Link></li>
        <li className="profile-nav-item"><Link to="/profile/portfolio"><span onClick={this.changeBold("portfolio")} style={selected === "portfolio" ? { fontWeight: "bold" } : { fontWeight: "normal" }}>Portfolio</span></Link></li>
        <li className="profile-nav-item"><Link to="/profile/follows"><span onClick={this.changeBold("follows")} style={selected === "follows" ? { fontWeight: "bold" } : { fontWeight: "normal" }}>Following</span></Link></li>
        <li className="profile-nav-item">Settings</li>
      </ul>
    );
  }
}


// export default ({selected}) => {
//   return (
//     <ul id="profile-nav-bar">
//       <li className="profile-nav-item"><Link to="/profile/listings"><span style={selected === "listings" ? { fontWeight: "bold" } : {fontWeight: "100%" }}>Listings</span></Link></li>
//       <li className="profile-nav-item"><Link to="/profile"><span style={selected === "profile" ? { fontWeight: "bold" } : { fontWeight: "100%" }}>Profile</span></Link></li>
//       <li className="profile-nav-item"><Link to="/profile/portfolio"><span style={selected === "portfolio" ? { fontWeight: "bold" } : { fontWeight: "100%" }}>Portfolio</span></Link></li>
//       <li className="profile-nav-item"><Link to="/profile/follows"><span style={selected === "follows" ? { fontWeight: "bold" } : { fontWeight: "100%" }}>Following</span></Link></li>
//       <li className="profile-nav-item">Settings</li>
//     </ul>
//   );
// }

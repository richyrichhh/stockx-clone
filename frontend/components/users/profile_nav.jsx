import React from 'react';
import { Link } from 'react-router-dom';

export default class ProfileNav extends React.Component {
  constructor(props) {
    super(props);
    console.dir(this.props)
  }

  render() {
    let { selected } = this.props
    return (
      <ul id="profile-nav-bar">
        <li className="profile-nav-item"><Link to="/profile/listings"><span style={selected === "listings" ? { fontWeight: "bold" } : { fontWeight: "100%" }}>Listings</span></Link></li>
        <li className="profile-nav-item"><Link to="/profile"><span style={selected === "profile" ? { fontWeight: "bold" } : { fontWeight: "100%" }}>Profile</span></Link></li>
        <li className="profile-nav-item"><Link to="/profile/portfolio"><span style={selected === "portfolio" ? { fontWeight: "bold" } : { fontWeight: "100%" }}>Portfolio</span></Link></li>
        <li className="profile-nav-item"><Link to="/profile/follows"><span style={selected === "follows" ? { fontWeight: "bold" } : { fontWeight: "100%" }}>Following</span></Link></li>
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

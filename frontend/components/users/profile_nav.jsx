import React from 'react';
import { Link } from 'react-router-dom';

export default class ProfileNav extends React.Component {
  constructor(props) {
    super(props);
    // console.dir(this.props)
    this.changeBold = this.changeBold.bind(this);
  }

  componentDidMount() {
    console.dir(this.props);
    $(document.getElementById(`p-navbar-${this.props.selected}`)).addClass("profile-selected");
  }

  // componentWillUpdate() {
  //   let selected = document.getElementsByClassName("profile-selected")
  //   if (selected.length > 0) $(selected[0]).removeClass("profile-selected");
  //   $(document.getElementById(`p-navbar-${this.props.selected}`)).addClass("profile-selected");
  // }

  // componentDidCatch() {
  //   let selected = document.getElementsByClassName("profile-selected")
  //   if (selected.length > 0) $(selected[0]).removeClass("profile-selected");
  //   $(document.getElementById(`p-navbar-${this.props.selected}`)).addClass("profile-selected");
  // }

  changeBold(e) {
    e.preventDefault();
    let selected = document.getElementsByClassName("profile-selected")
    if (selected.length > 0) $(selected[0]).removeClass("profile-selected");
    $(e.currentTarget).addClass("profile-selected");
  }

  render() {
    return (
      <ul id="profile-nav-bar">
        <span id="profile-nav-name">{this.props.currentUser ? this.props.currentUser.name : ""}</span>
        <Link to="/profile/listings"><li onClick={this.changeBold} id="p-navbar-listings" className="profile-nav-item"><span className="nav-icon">💵</span><span className="nav-label">Listings</span></li></Link>
        <Link to="/profile"><li onClick={this.changeBold} id="p-navbar-profile" className="profile-nav-item"><span className="nav-icon">🤦‍♂️</span><span className="nav-label">Profile</span></li></Link>
        <Link to="/profile/portfolio"><li onClick={this.changeBold} id="p-navbar-portfolio" className="profile-nav-item"><span className="nav-icon">📈</span><span className="nav-label">Portfolio</span></li></Link>
        <Link to="/profile/follows"><li onClick={this.changeBold} id="p-navbar-follows" className="profile-nav-item"><span className="nav-icon">🔭</span><span className="nav-label">Following</span></li></Link>
        <li id="p-navbar-settings" className="profile-nav-item"><span className="nav-icon">⚙️</span>Settings</li>
      </ul>
    );
  }
}

  // changeBold(tab) {
  //   return e => this.setState({ bold: tab })
  // }

  // render() {
  //   let selected = this.state.bold
  //   return (
  //     <ul id="profile-nav-bar">
  //       <span id="profile-nav-name">{this.props.currentUser ? this.props.currentUser.name : ""}</span>
  //       <li className="profile-nav-item"><Link to="/profile/listings"><span class="nav-icon">💵</span><span className="nav-label" onClick={this.changeBold("listings")} style={selected === "listings" ? { fontWeight: "bold" } : { fontWeight: "normal" }}>Listings</span></Link></li>
  //       <li className="profile-nav-item"><Link to="/profile"><span class="nav-icon">🤦‍♂️</span><span className="nav-label" onClick={this.changeBold("profile")} style={selected === "profile" ? { fontWeight: "bold" } : { fontWeight: "normal" }}>Profile</span></Link></li>
  //       <li className="profile-nav-item"><Link to="/profile/portfolio"><span class="nav-icon">📈</span><span className="nav-label" onClick={this.changeBold("portfolio")} style={selected === "portfolio" ? { fontWeight: "bold" } : { fontWeight: "normal" }}>Portfolio</span></Link></li>
  //       <li className="profile-nav-item"><Link to="/profile/follows"><span class="nav-icon">🔭</span><span className="nav-label" onClick={this.changeBold("follows")} style={selected === "follows" ? { fontWeight: "bold" } : { fontWeight: "normal" }}>Following</span></Link></li>
  //       <li className="profile-nav-item"><span class="nav-icon">⚙️</span>Settings</li>
  //     </ul>
  //   );
  // }



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
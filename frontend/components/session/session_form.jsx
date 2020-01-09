import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.name = (this.props.currentUser.name ? this.props.currentUser.name.split(' ') : ["", ""])
    this.state = {
      username: this.props.currentUser.username,
      email: this.props.currentUser.email,
      password: "",
      id: this.props.currentUser.id,
      firstName: this.name[0],
      lastName: this.name[1]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestSubmit = this.handleGuestSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state, {name: (this.state.firstName + ' ' + this.state.lastName)});
    this.props.process(user);
    this.props.history.push('/profile');
  }

  handleInput(type) {
    return (e) => {
      console.log(`${type} changed to ${e.target.value}`);
      this.setState({ [type]: e.target.value });
    };
  }

  handleGuestSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, {username: 'demologin', password: 'demopassword'})
    this.props.process(user);
    this.props.history.push('/profile');
  }

  render() {
    const is_login_form = (this.props.formType === 'login' ? true : false);
    const is_edit_form = (this.props.formType === 'edit' ? true : false);
    return (
      <div id="form-div">
        {is_edit_form ? <div id="form-header"><strong>Edit</strong></div> : (!is_login_form ? (<div id="form-header"><p style={{ fontWeight: "bold" }}>Sign Up</p> <Link className="btn" to="/login"><p>Log In</p></Link></div>) : (<div id="form-header"><Link className="btn" to="/register"><p>Sign Up</p></Link> <p style={{ fontWeight: "bold" }}>Log In</p></div>))}
        <form action="" id="session-form" onSubmit={this.handleSubmit}>
          <label className="form-label">
            <input className="form-input" type="text" name="user[username]" placeholder="Username" value={this.state.username} onChange={this.handleInput('username')} />
          </label>
          {!is_login_form ? 
            <label className="form-label">
              <input className="form-input" type="text" name="user[name][0]" placeholder="First Name" value={this.state.firstName} onChange={this.handleInput('firstName')} />
            </label> : null}
          {!is_login_form ?
            <label className="form-label">
              <input className="form-input" type="text" name="user[name][1]" placeholder="Last Name" value={this.state.lastName} onChange={this.handleInput('lastName')} />
            </label> : null}
          {!is_login_form ?
            <label className="form-label">
              <input className="form-input" type="text" name="user[email]" placeholder="E-Mail" value={this.state.email} onChange={this.handleInput('email')} />
            </label> : null}
          <label className="form-label">
            <input className="form-input" type="password" name="user[password]" placeholder="Password" value={this.state.password} onChange={this.handleInput('password')} />
          </label>
          <input type="submit" id="session-form-submit" className="session-form-btn" value="Submit"/>
          {is_login_form ? <button id="guest-login-btn" className="session-form-btn" onClick={this.handleGuestSubmit}>Demo Login</button> : null}
        </form>
      </div>
    );
  }
}
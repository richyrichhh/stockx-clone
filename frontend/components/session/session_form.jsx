import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser.username,
      email: this.props.currentUser.email,
      password: "",
      id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.process(user);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  render() {
    const is_login_form = (this.props.formType === 'login' ? true : false);
    const is_edit_form = (this.props.formType === 'edit' ? true : false);
    return (
      <div id="form-div">
        {is_edit_form ? <p>Edit Profile</p> : (!is_login_form ? (<div id="form-header">Sign Up | <Link className="btn" to="/login">Log In</Link></div>) : (<div id="form-header"><Link className="btn" to="/register">Sign Up</Link> | Log In</div>))}
        <form action="" id="session-form" onSubmit={this.handleSubmit}>
          <label className="form-label">Username:
            <input className="form-input" type="text" name="user[username]" value={this.state.username} onChange={this.handleInput('username')} />
          </label>
          {!is_login_form ?
            <label className="form-label">E-Mail:
            <input className="form-input" type="text" name="user[email]" value={this.state.email} onChange={this.handleInput('email')} />
            </label> : null}
          <label className="form-label">Password:
            <input className="form-input" type="password" name="user[password]" value={this.state.password} onChange={this.handleInput('password')} />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
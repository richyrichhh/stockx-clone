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
      lastName: this.name[1],
      errors: this.props.errors
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestSubmit = this.handleGuestSubmit.bind(this);
  }

  componentDidMount() {
    let formClass = `formtype-${this.props.formType}`
    $(document.getElementById('form-span')).addClass(formClass);
    this.goto = '#/';
    if (this.props.location.state) this.goto = '#' + this.props.location.state.from.pathname;
    // console.dir($_SERVER['REQUEST_URI']);
  }

  componentWillUnmount() {
    this.state.errors = [];
    this.props.resetErrors();
  }

  componentDidUpdate() {
    // if (this.state.errors.length > 0) $(document.getElementById("user-form-errors")).removeClass('hidden');
    const form = $(document.getElementById('form-span'))
    form.removeClass('edit');
    form.removeClass('login');
    form.removeClass('register');
    let formClass = `formtype-${this.props.formType}`
    form.addClass(formClass);
  }

  renderErrors() {
    return (
      <ul className="error-list">
        {this.state.errors.map((error, i) => (
          <li className="error-item" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.dir(this.props);
    const user = Object.assign({}, this.state, {name: (this.state.firstName + ' ' + this.state.lastName)});
    this.props.process(user).then(success => window.location.replace(this.goto), 
      error => {
        this.setState({errors: this.props.errors});
        $(document.getElementById("user-form-errors")).removeClass('hidden');
      }
    );
  }

  handleInput(type) {
    return (e) => {
      // console.log(`${type} changed to ${e.target.value}`);
      this.setState({ [type]: e.target.value });
    };
  }

  handleGuestSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, {username: 'demologin', password: 'demopassword'})
    this.props.process(user);
    window.location.replace(this.goto) 
    // this.props.history.push('/profile');
  }

  render() {
    const is_login_form = (this.props.formType === 'login' ? true : false);
    const is_edit_form = (this.props.formType === 'edit' ? true : false);
    return (
      <div id="form-div">
        <span id="form-span">
          {is_edit_form ? <div id="form-header"><strong>Edit</strong></div> : (!is_login_form ? (<div id="form-header"><div className="selected btn" >Sign Up</div> <Link className="btn" to="/login"><div>Log In</div></Link></div>) : (<div id="form-header"><Link className="btn" to="/register"><div>Sign Up</div></Link> <div className="selected btn" >Log In</div></div>))}
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
        </span>
        <div id="user-form-errors" className="hidden">
          {this.renderErrors()}
        </div>
      </div>
    );
  }
}
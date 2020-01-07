import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors,
  formType: 'login',
  currentUser: {
    username: "",
    email: "",
    id: ""
  }
});

const mapDispatchToProps = dispatch => ({
  process: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
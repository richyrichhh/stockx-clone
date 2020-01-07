import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/session';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors,
  formType: 'register',
  currentUser: {
    username: "",
    email: "",
    id: ""
  }
});

const mapDispatchToProps = dispatch => ({
  process: (user) => dispatch(createUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
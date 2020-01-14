import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/session';
import { resetErrors } from '../../actions/errors';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'register',
  currentUser: {
    username: "",
    email: "",
    id: "",
    name: ""
  }
});

const mapDispatchToProps = dispatch => ({
  process: (user) => dispatch(createUser(user)),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import { resetErrors } from '../../actions/errors';
import SessionForm from './session_form';

const mapStateToProps = state => {
  // console.log(state);
  // console.log(state.from);
  return ({
  errors: state.errors.session,
  formType: 'login',
  currentUser: {
    username: "",
    email: "",
    id: "",
    name: ""
  }
})
};

const mapDispatchToProps = dispatch => ({
  process: (user) => dispatch(login(user)),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
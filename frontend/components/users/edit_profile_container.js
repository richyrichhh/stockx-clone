import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/users';
import SessionForm from '../session/session_form';

const mapStateToProps = state => ({
  errors: state.errors,
  formType: 'edit',
  currentUser: state.entities.currentUser
});

const mapDispatchToProps = dispatch => ({
  process: (user) => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
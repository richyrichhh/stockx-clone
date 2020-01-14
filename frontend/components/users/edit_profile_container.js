import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/users';
import { resetErrors } from '../../actions/errors';

import SessionForm from '../session/session_form';

const mapStateToProps = state => ({
  errors: state.errors.user,
  formType: 'edit',
  currentUser: state.entities.currentUser,
});

const mapDispatchToProps = dispatch => ({
  process: (user) => dispatch(updateUser(user)),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
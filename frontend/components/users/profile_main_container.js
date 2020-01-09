import React from 'react';
import { connect } from 'react-redux';
import { updateUser, removeUser } from '../../actions/users';
import { logout } from '../../actions/session';
import ProfileMain from './profile_main';

const mapStateToProps = (state) => ({
  currentUser: state.entities.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user)),
  removeUser: (id) => dispatch(removeUser(id)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMain);
import React from 'react';
import { connect } from 'react-redux';
import { removeUser } from '../../actions/users';
import { logout } from '../../actions/session';
import Profile from './profile';

const mapStateToProps = (state) => ({
  currentUser: state.entities.currentUser
});

const mapDispatchToProps = dispatch => ({
  removeUser: (id) => dispatch(removeUser(id)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
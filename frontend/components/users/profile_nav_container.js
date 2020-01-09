import React from 'react';
import { connect } from 'react-redux';
// import { updateUser, removeUser } from '../../actions/users';
// import { logout } from '../../actions/session';
import ProfileNav from './profile_nav';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.entities.currentUser
  })
};

const mapDispatchToProps = dispatch => ({});

// const mapDispatchToProps = dispatch => ({
//   updateUser: (user) => dispatch(updateUser(user)),
//   removeUser: (id) => dispatch(removeUser(id)),
//   logout: () => dispatch(logout())
// });

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNav);
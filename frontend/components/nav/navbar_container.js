import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout, checkLogin } from '../../actions/session';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.entities.currentUser,
    loggedIn: state.session.currentUserId,
    
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    checkLogin: () => dispatch(checkLogin())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
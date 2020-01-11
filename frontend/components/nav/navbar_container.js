import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.entities.currentUser
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
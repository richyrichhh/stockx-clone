import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUserId)
});

//<AuthRoute path="", component={} />
const Auth = ({ loggedIn, path, component: Component, ...rest }) => (
  <Route {...rest} path={path} render={props => (
    loggedIn ? <Redirect to={props.location.state ? props.location.state.from.pathname : '/'} /> : <Component {...props} asd={console.log(props)} />
  )}
  />
);

const Protected = ({ loggedIn, path, component: Component, ...rest }) => (
  <Route asdf="asdf" {...rest} path={path} render={props => (
    loggedIn ? <Component {...props} /> : <Redirect to={{pathname: "/login", state: {from: props.location}}} />
  )}
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
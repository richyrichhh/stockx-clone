import React from "react";
import SplashContainer from './splash/splash_container';
import LoginContainer from './session/login_container';
import RegistrationContainer from './session/registration_container';
import ProfileContainer from './users/profile_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route-util';

const App = () => (
  <div>
    <div id="nav-bar-div"></div>
    <Route exact path="/" component={SplashContainer} />
    <AuthRoute exact path="/login" component={LoginContainer} />
    <AuthRoute exact path="/register" component={RegistrationContainer} />
    <div id="footer-div"></div>
    <div id="ticker-div"></div>
  </div>
);

export default App;

// <ProtectedRoute exact path="/profile" component={ProfileContainer} />
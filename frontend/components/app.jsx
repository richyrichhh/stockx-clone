import React from "react";
import SplashContainer from './splash/splash_container';
import LoginContainer from './session/login_container';
import RegistrationContainer from './session/registration_container';
import ProfileContainer from './users/profile_container';
import ProductsIndexContainer from './products/products_index_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route-util';

const App = () => (
  <div>
    <div id="nav-bar-div"></div>
    <Route exact path="/" component={SplashContainer} />
    <Route exact path="/products" component={ProductsIndexContainer} />
    <ProtectedRoute path="/profile" component={ProfileContainer} />
    <AuthRoute exact path="/login" component={LoginContainer} />
    <AuthRoute exact path="/register" component={RegistrationContainer} />
    <div id="footer-div"></div>
    <div id="ticker-div"></div>
  </div>
);

export default App;

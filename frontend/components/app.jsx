import React from "react";
import SplashContainer from './splash/splash_container';
import LoginContainer from './session/login_container';
import RegistrationContainer from './session/registration_container';
import ProfileContainer from './users/profile_container';
import ProductsIndexContainer from './products/products_index_container';
import ProductsSearchContainer from './products/products_search_container';
import NavBarContainer from './nav/navbar_container';
import ProductShowContainer from './products/products_show_container';
import About from './about/about';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route-util';

const App = () => (
  <div id="app-div">

    <NavBarContainer />

    <div id="main-div">
      <Route exact path="/" component={SplashContainer} />
      <Switch>
        <Route exact path="/products" component={ProductsIndexContainer} />
        <Route exact path="/products/search" component={ProductsSearchContainer} />
        <Route exact path="/products/:productId/view" component={ProductShowContainer} />
      </Switch>
      <Route exact path="/about" component={About} />
      <ProtectedRoute path="/profile" component={ProfileContainer} asdf="asdf"/>
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/register" component={RegistrationContainer} />
    </div>
    <div id="footer-div"></div>
    <div id="ticker-div"></div>
  </div>
);

export default App;

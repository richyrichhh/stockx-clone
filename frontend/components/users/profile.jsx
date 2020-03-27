import React from 'react';
import { Route } from 'react-router-dom';
import { ProtectedRoute } from '../../utils/route-util';
import ProfileNavContainer from './profile_nav_container';
import ProfileMainContainer from './profile_main_container';
import EditProfileContainer from './edit_profile_container';
import PortfolioIndexContainer from '../portfolio/portfolio_index_container';
import PortfolioFormContainer from '../portfolio/portfolio_form_container';
import ListingsIndexContainer from '../listings/listings_index_container';
import ListingsFormContainer from '../listings/listings_form_container';
import FollowsContainer from '../follows/follows_container';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    // console.dir(this.props);
    this.selected = this.props.location.pathname.split('/');
    this.selected = this.selected[this.selected.length - 1];
  }

  render() {
    return (
      <div id="profile">
        <ProfileNavContainer selected={this.selected} />
        <div id="profile-main">
          <Route exact path="/profile" component={ProfileMainContainer} />
          <ProtectedRoute exact path="/profile/edit" component={EditProfileContainer} />
          <ProtectedRoute path="/profile/portfolio" component={PortfolioIndexContainer}  />
          <ProtectedRoute exact path="/profile/portfolio/add" component={PortfolioFormContainer} />
          <ProtectedRoute path="/profile/listings" component={ListingsIndexContainer} />
          <ProtectedRoute exact path="/profile/listings/new" component={ListingsFormContainer} />
          <ProtectedRoute path="/profile/follows" component={FollowsContainer} />
        </div>
      </div>
    );
  }
}
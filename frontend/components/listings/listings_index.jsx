import React from 'react'
import isEmpty from '../../utils/obj-util';
import ListingsBuyingContainer from './listings_buying_container';
import ListingsSellingContainer from './listings_selling_container';
import ListingsCreated from './listings_created';
import { Route } from 'react-router-dom';
import { ProtectedRoute } from '../../utils/route-util';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

export default class ListingsBuying extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchProducts();
  }

  render() {
    return (
      <div id="listings-index-div">
        <span id="listings-links">
          <Link to="/profile/listings/buying" className={location.hash.split('/').includes('buying') ? "listings-selected" : ""}>Buying</Link>
          <Link to="/profile/listings/selling" className={location.hash.split('/').includes('selling') ? "listings-selected" : ""}>Selling</Link>
        </span>
          <ProtectedRoute exact path="/profile/listings/buying" component={ListingsBuyingContainer} />
          <ProtectedRoute exact path="/profile/listings/selling" component={ListingsSellingContainer} />
          <ProtectedRoute exact path="/profile/listings/created" component={ListingsCreated} />
      </div>
    )
  }
}

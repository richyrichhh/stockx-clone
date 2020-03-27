import React from 'react'
import isEmpty from '../../utils/obj-util';
import ListingsBuyingContainer from './listings_buying_container';
import ListingsSellingContainer from './listings_selling_container';
import { Route } from 'react-router-dom';
import { ProtectedRoute } from '../../utils/route-util';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

export default class ListingsBuying extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div id="listings-index-div">
        <Link to="/profile/listings/buying">Buying</Link>
        <Link to="/profile/listings/selling">Selling</Link>
        <ProtectedRoute exact path="/profile/listings/buying" component={ListingsBuyingContainer} />
        <ProtectedRoute exact path="/profile/listings/selling" component={ListingsSellingContainer} />
      </div>
    )
  }
}

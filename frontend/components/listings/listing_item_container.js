import React from 'react';
import { connect } from 'react-redux';
import ListingItem from './listing_item';
import { removeItem } from '../../actions/portfolio';
import { updateOrder } from '../../actions/products';
import { fetchOrdersByProduct } from '../../actions/orders';

const mapStateToProps = (state, ownProps) => {
  let isLoggedIn = (state.session.currentUserId ? true : false);
  return ({
    currentUser: (isLoggedIn ? state.entities.currentUser : null),
    products: state.entities.products,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  updateOrder: (id) => dispatch(updateOrder(id)),
  fetchOrdersByProduct: (id) => dispatch(fetchOrdersByProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingItem);
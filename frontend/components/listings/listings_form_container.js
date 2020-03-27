import React from 'react';
import { connect } from 'react-redux';
import ListingsForm from './listings_form';
import { createOrder } from '../../actions/orders';
import { fetchProducts } from '../../actions/products';
import { resetErrors } from '../../actions/errors';


const mapStateToProps = (state) => {
  let isLoggedIn = (state.session.currentUserId ? true : false);
  return ({
    currentUser: (isLoggedIn ? state.entities.currentUser : null),
    products: state.entities.products,
    errors: state.errors.portfolio
  });
};

const mapDispatchToProps = dispatch => ({
  createOrder: (item) => dispatch(createOrder(item)),
  fetchProducts: () => dispatch(fetchProducts()),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsForm);


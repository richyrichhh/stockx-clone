import React from 'react';
import { connect } from 'react-redux';
import ProductsIndex from './products_index';
import { fetchProducts } from '../../actions/products';

const mapStateToProps = (state) => {
  let isLoggedIn = (state.session.currentUserId ? true : false);
  return ({
    currentUser: (isLoggedIn ? state.entities.currentUser : null),
    products: state.entities.products
  });
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsIndex);
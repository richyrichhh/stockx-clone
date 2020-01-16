import React from 'react';
import { connect } from 'react-redux';
import ProductsIndex from './products_index';
import { fetchOrdersByProduct } from '../../actions/orders';
import { fetchSales, fetchLastSale } from '../../actions/sales';

const mapStateToProps = (state) => {
  let isLoggedIn = (state.session.currentUserId ? true : false);
  return ({
    currentUser: (isLoggedIn ? state.entities.currentUser : null),
    products: state.entities.products
  });
};

const mapDispatchToProps = dispatch => ({
  fetchOrdersByProduct: () => dispatch(fetchOrdersByProduct()),
  fetchSales: () => dispatch(fetchSales()),
  fetchLastSale: () => dispatch(fetchLastSale())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsIndex);
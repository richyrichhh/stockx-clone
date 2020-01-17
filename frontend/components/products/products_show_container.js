import React from 'react';
import { connect } from 'react-redux';
import ProductsShow from './products_show';
import { fetchProduct } from '../../actions/products'
import { fetchOrdersByProduct } from '../../actions/orders';
import { fetchSales, fetchLastSale } from '../../actions/sales';

const mapStateToProps = (state, ownProps) => {
  let isLoggedIn = (state.session.currentUserId ? true : false);
  // console.dir(ownProps);
  return ({
    currentUser: (isLoggedIn ? state.entities.currentUser : null),
    products: state.entities.products,
    sales: state.entities.sales,
    orders: state.entities.orders
  });
};

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  fetchOrdersByProduct: (id) => dispatch(fetchOrdersByProduct(id)),
  fetchSales: (id) => dispatch(fetchSales(id)),
  fetchLastSale: (id) => dispatch(fetchLastSale(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsShow);
import React from 'react';
import { connect } from 'react-redux';
import ListingsIndex from './listings_index';
import { fetchPortfolio } from '../../actions/portfolio';
import { fetchOrdersByUser } from '../../actions/orders'
import { fetchProducts } from '../../actions/products';
import { fetchLastSale } from '../../actions/sales';

const mapStateToProps = (state) => {
  let isLoggedIn = (state.session.currentUserId ? true : false);
  return ({
    currentUser: (isLoggedIn ? state.entities.currentUser : null),
    products: state.entities.products,
    portfolio: state.entities.portfolio,
    sales: state.entities.sales,
    orders: state.entities.orders
  });
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchPortfolio: (id) => dispatch(fetchPortfolio(id)),
  fetchLastSale: (id) => dispatch(fetchLastSale(id)),
  fetchOrders: (id) => dispatch(fetchOrdersByUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsIndex);
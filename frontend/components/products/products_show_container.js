import React from 'react';
import { connect } from 'react-redux';
import ProductsShow from './products_show';
import { fetchProduct } from '../../actions/products'
import { fetchOrdersByProduct, updateOrder } from '../../actions/orders';
import { fetchSales, fetchLastSale, createSale } from '../../actions/sales';
import { fetchFollows, createFollow, deleteFollow } from '../../actions/follows';
import { addItem } from '../../actions/portfolio';

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
  fetchLastSale: (id) => dispatch(fetchLastSale(id)),
  fetchFollows: (id) => dispatch(fetchFollows(id)),
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (id) => dispatch(deleteFollow(id)),
  updateOrder: (order) => dispatch(updateOrder(order)),
  createSale: (sale) => dispatch(createSale(sale)),
  addItem: (id, item) => dispatch(addItem(id, item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsShow);
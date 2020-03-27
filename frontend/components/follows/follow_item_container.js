import React from 'react';
import { connect } from 'react-redux';
import FollowItem from './follow_item';
import { deleteFollow } from '../../actions/follows';
import { fetchProduct } from '../../actions/products';
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
  deleteFollow: (id) => dispatch(deleteFollow(id)),
  fetchOrdersByProduct: (id) => dispatch(fetchOrdersByProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowItem);
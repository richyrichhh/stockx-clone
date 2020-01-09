import React from 'react';
import { connect } from 'react-redux';
import PortfolioItem from './portfolio_item';
import { removeItem } from '../../actions/portfolio';
import { fetchProduct } from '../../actions/products';

const mapStateToProps = (state) => {
  let isLoggedIn = (state.session.currentUserId ? true : false);
  return ({
    currentUser: (isLoggedIn ? state.entities.currentUser : null),
    products: state.entities.products,
    portfolio: state.entities.portfolio,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  removeItem: (id) => dispatch(removeItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioItem);
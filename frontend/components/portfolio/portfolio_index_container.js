import React from 'react';
import { connect } from 'react-redux';
import PortfolioIndex from './portfolio_index';
import { fetchPortfolio } from '../../actions/portfolio';
import { fetchProducts } from '../../actions/products';

const mapStateToProps = (state) => {
  let isLoggedIn = (state.session.currentUserId ? true : false);
  return ({
    currentUser: (isLoggedIn ? state.entities.currentUser : null),
    products: state.entities.products,
    portfolio: state.entities.portfolio
  });
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: (id) => dispatch(fetchProduct(id)),
  fetchPortfolio: (id) => dispatch(fetchPortfolio(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioIndex);
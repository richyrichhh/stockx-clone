import React from 'react';
import { connect } from 'react-redux';
import PortfolioItem from './portfolio_item';
import { removeItem } from '../../actions/portfolio';
import { fetchProduct } from '../../actions/products';
import { fetchLastSale } from '../../actions/sales';

const mapStateToProps = (state, ownProps) => {
  let isLoggedIn = (state.session.currentUserId ? true : false);
  return ({
    currentUser: (isLoggedIn ? state.entities.currentUser : null),
    products: state.entities.products,
    portfolio: state.entities.portfolio
  });
};

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  removeItem: (id) => dispatch(removeItem(id)),
  fetchLastSale: (id) => dispatch(fetchLastSale(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioItem);
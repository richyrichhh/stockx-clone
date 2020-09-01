import React from 'react';
import { connect } from 'react-redux';
import PortfolioIndex from './portfolio_index';
import { fetchPortfolio } from '../../actions/portfolio';
import { fetchProducts } from '../../actions/products';
import { fetchLastSale, fetchSales } from '../../actions/sales';

const mapStateToProps = (state) => {
  let isLoggedIn = (state.session.currentUserId ? true : false);
  return ({
    currentUser: (isLoggedIn ? state.entities.currentUser : null),
    products: state.entities.products,
    portfolio: state.entities.portfolio,
    sales: state.entities.sales
  });
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchPortfolio: (id) => dispatch(fetchPortfolio(id)),
  fetchLastSale: (id) => dispatch(fetchLastSale(id)),
  fetchSales: (id) => dispatch(fetchSales(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioIndex);
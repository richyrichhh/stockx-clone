import React from 'react';
import { connect } from 'react-redux';
import PortfolioForm from './portfolio_form';
import { addItem } from '../../actions/portfolio';
import { fetchProducts } from '../../actions/products';
import { resetErrors } from '../../actions/errors';
import { fetchPortfolio } from '../../utils/api-portfolio-util';


const mapStateToProps = (state) => {
  let isLoggedIn = (state.session.currentUserId ? true : false);
  return ({
    currentUser: (isLoggedIn ? state.entities.currentUser : null),
    products: state.entities.products,
    portfolio: state.entities.portfolio,
    errors: state.errors.portfolio
  });
};

const mapDispatchToProps = dispatch => ({
  addItem: (id, item) => dispatch(addItem(id, item)),
  fetchProducts: () => dispatch(fetchProducts()),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioForm);


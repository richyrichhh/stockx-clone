import * as PortfolioUtil from '../utils/api-portfolio-util';

export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const RECEIVE_PORTFOLIO_ERRORS = 'RECEIVE_PORTFOLIO_ERRORS'

const receivePortfolio = portfolio => ({
  type: RECEIVE_PORTFOLIO,
  portfolio
});

const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item
});

const deleteItem = itemId => ({
  type: DELETE_ITEM,
  itemId
});

export const fetchPortfolio = () => dispatch =>
  PortfolioUtil.fetchPortfolio().then(portfolio => dispatch(receivePortfolio(portfolio)));

export const addItem = item => dispatch =>
  PortfolioUtil.addItem(item).then(newItem => dispatch(receiveItem(newItem)));

export const removeItem = id => dispatch =>
  PortfolioUtil.removeItem(id).then(() => dispatch(deleteItem(id)));
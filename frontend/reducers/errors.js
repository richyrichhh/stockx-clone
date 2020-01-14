import { combineReducers } from 'redux';

import session from './errors/session_errors';
import user from './errors/user_errors';
import product from './errors/product_errors';
import portfolio from './errors/portfolio_errors';

export default combineReducers({
  session,
  user,
  product,
  portfolio
});

import { combineReducers } from 'redux';
import usersReducer from './entities/users';
import productsReducer from './entities/products';
import portfolioReducer from './entities/portfolio';

export default combineReducers({
  currentUser: usersReducer,
  products: productsReducer,
  portfolio: portfolioReducer
});

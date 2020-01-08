import { combineReducers } from 'redux';
import usersReducer from './entities/users';
import productsReducer from './entities/products';

export default combineReducers({
  currentUser: usersReducer,
  products: productsReducer
});

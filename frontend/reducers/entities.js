import { combineReducers } from 'redux';
import usersReducer from './entities/users';
import productsReducer from './entities/products';
import portfolioReducer from './entities/portfolio';
import salesReducer from './entities/sales';
import ordersReducer from './entities/orders';
import followsReducer from './entities/follows';

export default combineReducers({
  currentUser: usersReducer,
  products: productsReducer,
  portfolio: portfolioReducer,
  orders: ordersReducer,
  sales: salesReducer,
  follows: followsReducer
});

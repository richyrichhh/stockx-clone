import { combineReducers } from 'redux';
import usersReducer from './entities/users';

export default combineReducers({
  currentUser: usersReducer
});

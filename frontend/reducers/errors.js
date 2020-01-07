import { combineReducers } from 'redux';
import sessionErrorsReducer from './errors/session_errors';
import session from './session';

export default combineReducers({
  session: sessionErrorsReducer
});

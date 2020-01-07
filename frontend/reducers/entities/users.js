import { RECEIVE_CURRENT_USER } from '../../actions/session';
import { RECEIVE_USER, DELETE_USER } from '../../actions/users';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER || RECEIVE_USER:
      if (action.user) {
        return Object.assign({}, state, action.user);
      } else {
        return state;
      }
    case DELETE_USER:
      return {};
    default:
      return state;
  }
};
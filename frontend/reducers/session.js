import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

const _nullSession = { id: null };

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.user) {
        return Object.assign({}, { currentUserId: action.user.id });
      } else {
        return state;
      }
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};
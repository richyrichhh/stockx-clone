import { RECEIVE_FOLLOWS, RECEIVE_FOLLOW, RECEIVE_FOLLOW_ERRORS } from '../../actions/follows';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLLOWS:
      return Object.assign({}, action.follows);
    case RECEIVE_FOLLOW:
      if (action.order) {
        return Object.assign({}, state, { [action.follow.id]: action.follow });
      } else {
        return state;
      }
    default:
      return state;
  }
};
import { RECEIVE_FOLLOW, RECEIVE_FOLLOW_ERRORS } from '../../actions/follows';

const _cleanErrors = [];

export default (state = _cleanErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLLOW_ERRORS:
      return action.errors;
    case RECEIVE_FOLLOW:
      return _cleanErrors;
    default:
      return state;
  }
};
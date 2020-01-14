import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../../actions/session';

import { CLEAR_ERRORS } from '../../actions/errors';

const _cleanErrors = [];

export default (state = _cleanErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CLEAR_ERRORS:
      return _cleanErrors;
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _cleanErrors;
    default:
      return state;
  }
};
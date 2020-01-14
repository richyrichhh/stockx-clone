import { RECEIVE_USER, RECEIVE_USER_ERRORS } from '../../actions/users';

import { CLEAR_ERRORS } from '../../actions/errors';

const _cleanErrors = [];

export default (state = _cleanErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CLEAR_ERRORS:
      return _cleanErrors;
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case RECEIVE_USER:
      return _cleanErrors;
    default:
      return state;
  }
};
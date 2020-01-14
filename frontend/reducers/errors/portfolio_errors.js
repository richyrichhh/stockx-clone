import { RECEIVE_ITEM, RECEIVE_PORTFOLIO_ERRORS } from '../../actions/portfolio';

import { CLEAR_ERRORS } from '../../actions/errors';

const _cleanErrors = [];

export default (state = _cleanErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PORTFOLIO_ERRORS:
      return action.errors;
    case RECEIVE_ITEM || CLEAR_ERRORS:
      // console.log('we in clear errors');
      return _cleanErrors;
    default:
      return state;
  }
};
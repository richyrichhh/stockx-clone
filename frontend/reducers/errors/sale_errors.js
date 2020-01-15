import { RECEIVE_SALE, RECEIVE_SALE_ERRORS } from '../../actions/sales';

const _cleanErrors = [];

export default (state = _cleanErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SALE_ERRORS:
      return action.errors;
    case RECEIVE_SALE:
      return _cleanErrors;
    default:
      return state;
  }
};
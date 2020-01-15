import { RECEIVE_ORDER, RECEIVE_ORDER_ERRORS } from '../../actions/orders';

const _cleanErrors = [];

export default (state = _cleanErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ORDER_ERRORS:
      return action.errors;
    case RECEIVE_ORDER:
      return _cleanErrors;
    default:
      return state;
  }
};
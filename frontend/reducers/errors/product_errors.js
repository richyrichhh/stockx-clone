import { RECEIVE_PRODUCT, RECEIVE_PRODUCT_ERRORS } from '../../actions/products';

const _cleanErrors = [];

export default (state = _cleanErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT_ERRORS:
      return action.errors;
    case RECEIVE_PRODUCT:
      return _cleanErrors;
    default:
      return state;
  }
};
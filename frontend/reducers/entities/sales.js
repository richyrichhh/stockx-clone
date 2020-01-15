import { RECEIVE_SALES, RECEIVE_SALE, RECEIVE_SALE_ERRORS } from '../../actions/sales';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SALES:
      return Object.assign({}, action.sales);
    case RECEIVE_SALE:
      if (action.sale) {
        return Object.assign({}, state, { [action.sale.id]: action.sale });
      } else {
        return state;
      }
    default:
      return state;
  }
};
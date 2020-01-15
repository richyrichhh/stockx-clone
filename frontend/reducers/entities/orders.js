import { RECEIVE_ORDERS, RECEIVE_ORDER, RECEIVE_ORDER_ERRORS } from '../../actions/orders';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ORDERS:
      return Object.assign({}, action.orders);
    case RECEIVE_ORDER:
      if (action.order) {
        return Object.assign({}, state, { [action.order.id]: action.order });
      } else {
        return state;
      }
    default:
      return state;
  }
};
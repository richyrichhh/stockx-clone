import { RECEIVE_PORTFOLIO, RECEIVE_ITEM, DELETE_ITEM, RECEIVE_PORTFOLIO_ERRORS } from '../../actions/portfolio';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PORTFOLIO:
      return Object.assign({}, action.portfolio);
    case RECEIVE_ITEM:
      if (action.item) {
        return Object.assign({}, state, {[action.item.id]: action.item});
      } else {
        return state;
      }
    case DELETE_ITEM:
      let newState = Object.assign({}, state);
      newState[action.itemId] = undefined;
      return newState;
    default:
      return state;
  }
};
import * as OrdersUtil from '../utils/api-orders-util';

export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';
export const RECEIVE_ORDER = 'RECEIVE_ORDER';
export const RECEIVE_ORDER_ERRORS = 'RECEIVE_ORDER_ERRORS';

const receiveOrder = order => ({
  type: RECEIVE_ORDER,
  order
});

const receiveOrders = orders => ({
  type: RECEIVE_ORDERS,
  orders
});

const receiveOrderErrors = errors => ({
  type: RECEIVE_ORDER_ERRORS,
  errors
});

export const fetchOrdersByProduct = (product_id) => dispatch =>
  OrdersUtil.fetchOrdersByProduct(product_id).then(orders => dispatch(receiveOrders(orders)));

export const fetchOrdersByUser = (user_id) => dispatch =>
  OrdersUtil.fetchOrdersByUser(user_id).then(orders => dispatch(receiveOrders(orders)));

export const createOrder = formOrder => dispatch =>
  OrdersUtil.createOrder(formOrder).then(order => dispatch(receiveOrder(order)), errors => dispatch(receiveOrderErrors(errors.responseJSON)));

export const updateOrder = formOrder => dispatch =>
  OrdersUtil.updateOrder(formOrder).then(order => dispatch(receiveOrder(order)), errors => dispatch(receiveOrderErrors(errors.responseJSON)));
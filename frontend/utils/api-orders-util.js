export const fetchOrdersByProduct = (product_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/products/${product_id}/orders`
  })
);

export const fetchOrdersByUser = (user_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${user_id}/orders`
  })
);

export const createOrder = (order) => (
  $.ajax({
    method: 'POST',
    url: '/api/orders',
    data: {order}
  })
);

export const updateOrder = (order) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/orders/${order.id}`,
    data: { order }
  })
);
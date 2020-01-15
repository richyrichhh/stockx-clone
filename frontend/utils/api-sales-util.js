export const fetchSales = (product_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/products/${product_id}/sales`
  })
);

export const fetchLastSale = (product_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/products/${product_id}/sales/last`
  })
);

export const fetchSalesBySize = (product_id, size) => (
  $.ajax({
    method: 'GET',
    url: `/api/products/${product_id}/sales/${size}`
  })
);

export const createSale = (sale) => (
  $.ajax({
    method: 'POST',
    url: '/api/sales',
    data: {sale}
  })
);

export const updateSale = (sale) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/sales/${sale.id}`,
    data: { sale }
  })
);
import * as SalesUtil from '../utils/api-sales-util';

export const RECEIVE_SALES = 'RECEIVE_SALES';
export const RECEIVE_SALE = 'RECEIVE_SALE';
export const RECEIVE_SALE_ERRORS = 'RECEIVE_SALE_ERRORS';
export const RECEIVE_LAST_SALE = 'RECEIVE_LAST_SALE';

const receiveSale = sale => ({
  type: RECEIVE_SALE,
  sale
});

const receiveSales = sales => ({
  type: RECEIVE_SALES,
  sales
});

const receiveLastSale = sale => ({
  type: RECEIVE_LAST_SALE,
  sale
});

const receiveSaleErrors = errors => ({
  type: RECEIVE_SALE_ERRORS,
  errors
});

export const fetchSales = (product_id) => dispatch =>
  SalesUtil.fetchSales(product_id).then(sales => dispatch(receiveSales(sales)));

export const fetchLastSale = (product_id) => dispatch =>
  SalesUtil.fetchLastSale(product_id).then(sale => dispatch(receiveLastSale(sale)));

export const fetchSalesBySize = (product_id) => dispatch =>
  SalesUtil.fetchSalesBySize(product_id, size).then(sales => dispatch(receiveSales(sales)));

export const createSale = sale => dispatch =>
  SalesUtil.createSale(sale).then(s => dispatch(receiveSale(s)), errors => dispatch(receiveSaleErrors(errors.responseJSON)));

export const updateSale = sale => dispatch =>
  SalesUtil.updateSale(sale).then(s => dispatch(receiveSale(s)), errors => dispatch(receiveSaleErrors(errors.responseJSON)));
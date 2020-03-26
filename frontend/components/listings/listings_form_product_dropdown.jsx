import React from 'react';

export default ({ products }) => {
  return (
    <select name="product_id" defaultValue="default" id="portfolio-form-product-dropdown">
      <option value="default" disabled>Product</option>
      {products.map(product => 
        (
          <option value={`${product.id}|jj|${product.model}|jj|${product.brand}`} key={`product-opt${product.id}`}>{product.name}</option>
        )
      )}
    </select>
  );
}

import React from 'react';
import ProductsIndexItem from './products_index_item'
import { Link } from 'react-router-dom';

export default class ProductsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    let { products } = this.props;
    if (!products[0]) products = [];
    return (
      <div id="products-index-div">
        <ul id="products-list">
          {products.map(product => (
            <ProductsIndexItem product={product} key={`product${product.id}`} />
          ))}
        </ul>
      </div>
    )
  }
}
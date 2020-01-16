import React from 'react';
import ProductsIndexItem from './products_index_item'
import isEmpty from '../../utils/obj-util';
import { Link } from 'react-router-dom';

export default class ProductsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products
    }
  }

  componentDidMount() {
    this.props.fetchProducts().then(action => this.setState({products: action.products}));
  }

  render() {
    let products = Object.values(this.state.products);
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
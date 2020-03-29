import React from 'react';
import ProductsIndexItem from './products_index_item'
import isEmpty from '../../utils/obj-util';
import { Link, withRouter } from 'react-router-dom';

export default class ProductsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
      searchTerms: []
    }
  }

  componentDidMount() {
    this.props.fetchProducts()
      .then(action => this.setState({products: action.products}));
      if (window.location.searchCache) {
        let newState = Object.assign({}, this.state);
          newState.searchTerms = [];
        for (let word of window.location.searchCache.split(' ')) {
          newState.searchTerms.push(word);
        }
        delete window.location.searchCache;
        this.setState(newState);
      }
  }

  filterProducts(products) {
    let filtered = [];
    let terms = this.state.searchTerms;
    terms = terms.map((word) => word.toLowerCase());
    for (let prod of products) {
      
      for (let name of prod.name.toLowerCase().split(' ')) {
        if (terms.includes(name)) {
          if (!filtered.includes(prod)) filtered.push(prod);
          break;
        }
      }
      for (let brand of prod.brand.toLowerCase().split(' ')) {
        if (terms.includes(brand)) {
          if (!filtered.includes(prod)) filtered.push(prod);
          
          break;
        }
      }
      for (let model of prod.model.toLowerCase().split(' ')) {
        if (terms.includes(model)) {
          if (!filtered.includes(prod)) filtered.push(prod);
          
          break;
        }
      }
      for (let colorway of prod.colorway.toLowerCase().split(' ')) {
        if (terms.includes(colorway)) {
          if (!filtered.includes(prod)) filtered.push(prod);
         
          break;
        }
      }
      for (let style_code of prod.style_code.toLowerCase().split(' ')) {
        if (terms.includes(style_code)) {
          if (!filtered.includes(prod)) filtered.push(prod);
         
          break;
        }
      }
      
    }
    return filtered;
  }

  render() {
    console.log(this.state);
    let products = Object.values(this.state.products);
    if (this.state.searchTerms.length > 0) {
      products = this.filterProducts(products);
    }
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
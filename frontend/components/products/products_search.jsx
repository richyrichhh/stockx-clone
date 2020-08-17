import React from 'react';
import ProductsIndexItem from './products_index_item'
import isEmpty from '../../utils/obj-util';
import { Link, withRouter } from 'react-router-dom';

export default class ProductsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
      filtered: []
    }
    this.filter = this.filterProducts.bind(this);
  }

  componentDidMount() {
    let memProds = Object.values(this.props.products);
    if (memProds.length) {
      this.setState({products: memProds})
      this.filterProducts();
    } else {
      this.props.fetchProducts()
        .then(action => this.setState({products: action.products}))
        .then(() => this.filterProducts());
    }


    let searchBar = document.getElementById('navbar-search');
    searchBar.addEventListener('keyup', this.filter);
  }

  componentWillUnmount() {
    let searchBar = document.getElementById('navbar-search');
    searchBar.removeEventListener('keyup', this.filterProducts);
  }

  filterProducts() {
    // console.log(this.props.products);

    let products = Object.values(this.state.products);
    let filtered = [];
    let terms = document.getElementById('navbar-search').value.split(' ');
    if (terms.length === 0) filtered = products;
    else {
      terms = terms.map((word) => word.toLowerCase());
      for (let prod of products) {
        for (let name of prod.name.toLowerCase().split(' ')) {
          for (let term of terms) {
            if (name.includes(term)) {
              if (!filtered.includes(prod)) filtered.push(prod);
              break;
            }
          }
        }
        for (let brand of prod.brand.toLowerCase().split(' ')) {
          for (let term of terms) {
            if (brand.includes(term)) {
              if (!filtered.includes(prod)) filtered.push(prod);
              break;
            }
          }
        }
        for (let model of prod.model.toLowerCase().split(' ')) {
          for (let term of terms) {
            if (model.includes(term)) {
              if (!filtered.includes(prod)) filtered.push(prod);
              break;
            }
          }
        }
        for (let colorway of prod.colorway.toLowerCase().split(' ')) {
          for (let term of terms) {
            if (colorway.includes(term)) {
              if (!filtered.includes(prod)) filtered.push(prod);
             
              break;
            }
          }
        }
        for (let style_code of prod.style_code.toLowerCase().split(' ')) {
          for (let term of terms) {
            if (style_code.includes(term)) {
              if (!filtered.includes(prod)) filtered.push(prod);
              break;
            }
          }
        }
        
      }
    }
    
    this.setState({filtered: filtered});

  }

  render() {
    let products = this.state.filtered;

    if (products.length === 0) return (
      <div id="products-index-div">
        <b className="center-everything">
          No search results found.

        </b>
      </div>
    )

    else return (
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
import React from 'react';
import isEmpty from '../../utils/obj-util';

export default class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    let prodId = this.props.location.pathname.split('/')[2];
    this.state = {
      productId: prodId
    }
  }

  componentDidMount() {
    this.props.fetchProduct(this.state.productId);
    this.props.fetchOrdersByProduct(this.state.productId);
    this.props.fetchSales(this.state.productId);
    this.props.fetchLastSale(this.state.productId);
  
  }

  render() {
    let product = this.props.products[this.state.productId] || {};
    let sales = this.props.sales[this.state.productId] ? Object.values(this.props.sales[this.state.productId]) : [];
    let orders = isEmpty(this.props.orders) ? [] : Object.values(this.props.orders);
    console.dir(sales);
    console.dir(orders);
    return (
    <div className="product-show">
      <div id="prod-show-buttons-outer">
        <div id="prod-show-buttons">
          <button id="prod-show+p">+ Portfolio</button>
          <button id="prod-show+f">+ Follow</button>
        </div>
      </div>
      <header>{product.model} "{product.name}"</header>
        <span id="prod-show-misc">
          <span id="prod-show-condition">
            Condition: <p style={{color: 'green'}}>New</p>
          </span> | <span id="prod-show-authenticity">
            <p style={{color: 'green'}}>100% Authentic</p>
          </span>
        </span>
      {sales[sales.length - 1] ? sales[sales.length - 1].price : ""}
      {orders[0] ? orders[0].price : ""}


      <div id="prod-show-main">
        <div id="prod-show-img">
          <img src={product.img_path}/>
          <span id="prod-show-detail">
              <p><p className="bold-this">Style</p> <p>{product.style_code}</p></p>
              <p><p className="bold-this">Colorway</p> <p>{product.colorway ? product.colorway.split(' ').join('/') : 'black'}</p></p>
              <p><p className="bold-this">Release Date</p> <p>{product.release_date}</p></p>
          </span>
        </div>
      </div>
    </div>
    )
  }
}
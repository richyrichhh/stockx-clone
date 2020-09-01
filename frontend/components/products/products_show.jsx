import React from 'react';
import isEmpty from '../../utils/obj-util';
import ProductOrders from './show_components/orders-sales';

export default class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    let prodId = this.props.location.pathname.split('/')[2];
    this.state = {
      productId: prodId,
      follows: false,
      follow_id: -1,
      hBid: -1,
      hBidOrder: '',
      lAsk: -1,
      lAskOrder: '',
      sales: null,
    }
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.state.productId);
    this.props.fetchOrdersByProduct(this.state.productId).then(data => {
      // console.log(data);
      let hBid = -1;
      let lAsk = -1;
      for (let order of Object.values(data.orders)) {
        if (hBid === -1 && order.order_type === "buy") {
          hBid = order;
        }
        else if (order.price > hBid && order.order_type === "buy") {
          hBid = order;
        }
        if (lAsk === -1 && order.order_type === "sell") {
          lAsk = order;
        }
        else if (order.price < lAsk && order.order_type === "sell") {
          lAsk = order;
        }
      }
      this.setState({hBid: hBid, lAsk: lAsk});
      this.orders = data.orders;
    });
    this.props.fetchSales(this.state.productId).then((sales) => {
      this.setState({sales: sales.sales})
    });
    this.props.fetchLastSale(this.state.productId);
    if (this.props.currentUser) this.props.fetchFollows(this.props.currentUser.id).then(data => {
      // console.log('here');
      // console.dir(data);
      for (let follow of Object.values(data.follows)) {
        // console.log(this.state.productId);
        // console.log(follow.product_id);
        if (parseInt(follow.product_id) === parseInt(this.state.productId)) {
          // console.log('true')
          this.setState({follows: true, follow_id: follow.id});
        }
      }
    })
  
  }

  handleFollow(e) {
    if (!this.props.currentUser) {
      location.href = location.origin + `/#/login`;
      return false;
    }
    e.preventDefault();
    if (this.state.follows) {
      this.props.deleteFollow(this.state.follow_id);
      this.setState({follows: false, follow_id: -1});
    }
    else if (!this.state.follows) {
      this.props.createFollow({user_id: this.props.currentUser.id, product_id: this.state.productId}).then( data => {
        // console.log(data);
        this.setState({follows: true, follow_id: data.follow.id});
      })
    }
  }

  render() {
    
    // console.log(`id is ${this.props.currentUser.id}`); 
    // console.dir(this.props.currentUser.id);

    let product = this.props.products[this.state.productId] || {};
    let sales = this.state.sales ? Object.values(this.state.sales[this.state.productId]) : this.props.sales[this.state.productId] ? Object.values(this.props.sales[this.state.productId]) : [];
    let orders = this.orders ? Object.values(this.orders) : isEmpty(this.props.orders) ? [{price: 0, type: 'buy'}] : Object.values(this.props.orders);
    let currUser = this.props.currentUser ? this.props.currentUser.id : -1;

    return (
    <div className="product-show">
      <div id="prod-show-buttons-outer">
        <div id="prod-show-buttons">
          <button id="prod-show-f" onClick={this.handleFollow}>+ {this.state.follows ? 'Following' : 'Follow'}</button>
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

      <ProductOrders product={product} sales={sales} orders={[this.state.hBid, this.state.lAsk]} updateOrder={this.props.updateOrder} createSale={this.props.createSale} addItem={this.props.addItem} currentUserId={currUser} />
      


      <div id="prod-show-main">
        <div id="prod-show-img">
          <img src={product.img_path}/>
          <span id="prod-show-detail">
              <span><p className="bold-this">Style</p> <p>{product.style_code}</p></span>
              <span><p className="bold-this">Colorway</p> <p>{product.colorway ? product.colorway.split(' ').join('/') : 'black'}</p></span>
              <span><p className="bold-this">Release Date</p> <p>{product.release_date}</p></span>
          </span>
        </div>
      </div>
    </div>
    )
  }
}
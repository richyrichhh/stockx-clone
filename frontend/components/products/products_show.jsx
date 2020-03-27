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
      follow_id: -1
    }
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.state.productId);
    this.props.fetchOrdersByProduct(this.state.productId);
    this.props.fetchSales(this.state.productId);
    this.props.fetchLastSale(this.state.productId);
    this.props.fetchFollows(this.props.currentUser.id).then(data => {
      console.log('here');
      console.dir(data);
      for (let follow of Object.values(data.follows)) {
        console.log(this.state.productId);
        console.log(follow.product_id);
        if (parseInt(follow.product_id) === parseInt(this.state.productId)) {
          console.log('true')
          this.setState({follows: true, follow_id: follow.id});
        }
      }
    })
  
  }

  handleFollow(e) {
    e.preventDefault();
    if (this.state.follows) {
      this.props.deleteFollow(this.state.follow_id);
      this.setState({follows: false, follow_id: -1});
    }
    else if (!this.state.follows) {
      this.props.createFollow({user_id: this.props.currentUser.id, product_id: this.state.productId}).then( data => {
        console.log(data);
        this.setState({follows: true, follow_id: data.follow.id});
      })
    }
  }

  render() {
    let product = this.props.products[this.state.productId] || {};
    let sales = this.props.sales[this.state.productId] ? Object.values(this.props.sales[this.state.productId]) : [];
    let orders = isEmpty(this.props.orders) ? [] : Object.values(this.props.orders);

    return (
    <div className="product-show">
      <div id="prod-show-buttons-outer">
        <div id="prod-show-buttons">
          {/* <button id="prod-show+p">+ Portfolio</button> */}
          <button id="prod-show+f" onClick={this.handleFollow}>+ {this.state.follows ? 'Following' : 'Follow'}</button>
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

      {sales[sales.length - 1] && orders[0] ? <ProductOrders product={product} sales={sales} orders={orders} /> : ""}
      


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
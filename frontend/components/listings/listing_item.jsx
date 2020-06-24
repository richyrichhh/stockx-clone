import React from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import isEmpty from '../../utils/obj-util';

Array.prototype.rotateRight = function (n) {
  this.unshift(this.splice(n, this.length))
  return this;
}

Array.prototype._formatDateFromDate = function () {
  this[1] -= 1;
  if (this[0].length === 1) this[0] = `0${this[0]}`;
  if (this[1].length === 1) this[1] = `0${this[1]}`;
  return this;
}

Array.prototype._formatDateFromString = function() {
  this[2] -= 1;
  return this;
}
export default class ListingItem extends React.Component {
  constructor(props) {
    super(props);
    // console.log('here');
    // console.dir(this.props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = { 
      order: (this.props.order ? this.props.order : {}),
      product: (this.props.products[this.props.order.product_id] ? this.props.products[this.props.order.product_id] : {}),
      hBid: -1,
      lAsk: 21717
    };
  }

  componentDidMount() {
    let p_id = this.state.order.product_id;
    if (!this.props.products[p_id]) this.props.fetchProduct(p_id);
    this.props.fetchOrdersByProduct(p_id).then((data) => {
      let newState = Object.assign({}, this.state);
      // console.dir(data);
      for (let order of Object.values(data.orders)) {
        if (order.order_type === 'buy' && order.price > newState.hBid) newState.hBid = order.price;
        else if (order.order_type === 'sell' && order.price < newState.lAsk) newState.lAsk = order.price;
      }
      this.setState(newState);
      // console.dir(this.state);
    })
  }

  handleDelete(e) {
    // e.preventDefault();
    let newOrder = Object.assign({}, this.state.order);
    newOrder.active = 'false'
    this.props.updateOrder(newOrder)//.then(data => console.dir(data));
    this.setState({order: {}, product: {}});
    location.reload();
    // console.dir(this.context);
    // this.setState(this.state.a ? {a: false} : {a: true});
    // this.forceUpdate();
  }

  render() {
    let product = this.state.product;
    let order = this.state.order;
    if (isEmpty(product) || isEmpty(order)) return (null);
    let size = ["n/a", "n/a"];
    if (order) size = [order.sex, order.size];
    return (
      <tr className="listing-row listing-item">
        <td className="listing-col0">
          <Link to="#"><img className="delete-listing-item-btn" src="https://image.flaticon.com/icons/png/512/64/64022.png" onClick={this.handleDelete} height="25px" /></Link>
        </td>
        <td className="listing-col1 listing-item-info">
          <span className="listing-item-pic">
            <img src={product.img_path} width="80px" />
          </span>
          <Link to={`/products/${product.id}/view`}>
            <ul className="listing-item-details">
              <li>{product.model}</li>
              <li>{product.name}</li>
              <li>U.S. {size[0] === "M" ? `Men's Size: ${size[1]}` : size[0] === 'F' ? `Women's Size: ${size[1]}` : `Kids' Size: ${size[1]}`}</li>
            </ul>
          </Link>
        </td>
        <td className="listing-col2"><p>${order.price}</p></td>
        <td className="listing-col3"><p>{this.state.hBid === -1 ? 'n/a' : `$${this.state.hBid}`}</p></td>
        <td className="listing-col4"><p>{this.state.lAsk === 21717 ? 'n/a' : `$${this.state.lAsk}`}</p></td>
      </tr>
    )
  }
}
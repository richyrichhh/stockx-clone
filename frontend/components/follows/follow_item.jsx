import React from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import isEmpty from '../../utils/obj-util';


export default class FollowItem extends React.Component {
  constructor(props) {
    super(props);
    // console.log('here');
    // console.dir(this.props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = { 
      follow: (this.props.follow ? this.props.follow : {}),
      // product: (this.props.products[this.props.order.product_id] ? this.props.products[this.props.order.product_id] : {}),
      hBid: -1,
      lAsk: 21717
    };
    // console.log(this.state.follow);
  }

  componentDidMount() {
    let p_id = this.state.follow.id;
    // if (!this.props.products[p_id]) this.props.fetchProduct(p_id);
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
    // let newOrder = Object.assign({}, this.state.order);
    // newOrder.active = 'false'
    // console.log(this.state.follow);
    this.props.deleteFollow(this.state.follow.f_id);//.then(data => console.dir(data));
    this.setState({follow: {}});
    // window.refresh();
  }

  render() {
    let product = this.state.follow;
    if (isEmpty(product)) return (null);
    return (
      <tr className="fl-row fl-item">
        <td className="fl-col0">
          <Link to="/profile/follows/"><img className="delete-follow-item-btn" src="https://image.flaticon.com/icons/png/512/64/64022.png" onClick={this.handleDelete} height="25px" /></Link>
        </td>
        
        <td className="fl-col1 fl-item-info">
          <span className="fl-item-pic">
            <img src={product.img_path} width="80px" />
          </span>
          <Link to={`/products/${product.id}/view`}>
            <ul className="fl-item-details">
              <li>{product.model}</li>
              <li>{product.name}</li>
            </ul>
          </Link>
        </td>
        <td className="fl-col2"><p>{this.state.hBid === -1 ? 'n/a' : `$${this.state.hBid}`}</p></td>
        <td className="fl-col3"><p>{this.state.lAsk === 21717 ? 'n/a' : `$${this.state.lAsk}`}</p></td>
      </tr>
    )
  }
}
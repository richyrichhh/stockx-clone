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
export default class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    // console.log('here');
    // console.dir(this.props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = { 
      item: (this.props.item ? this.props.item : {}),
      product: (this.props.products[this.props.item.product_id] ? this.props.products[this.props.item.product_id] : {}),
      sale: (this.props.sales.lastSale ? this.props.sales.lastSale : {})
    };
    console.log(this.state.sale);
  }

  componentDidMount() {
    let p_id = this.state.item.product_id
    if (!this.props.products[p_id]) this.props.fetchProduct(p_id);
    // this.props.fetchLastSale(p_id).then((action)=>this.setState({sales: { [action.sale.product_id]: { lastSale: action.sale }}}));
    // console.dir(this.props);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeItem(this.props.item.id);
    this.setState({item: {}, product: {}, sale: {} });
    // console.dir(this.context);
    // this.setState(this.state.a ? {a: false} : {a: true});
    // this.forceUpdate();
  }

  render() {
    let product = this.state.product;
    let item = this.state.item;
    if (isEmpty(product) || isEmpty(item)) return (null);
    let size = ["n/a", "n/a"];
    if (item) size = item.size.split(' ');
    let date = item.updated_at;
    date = (date ? date.split('T')[0].split('-')._formatDateFromString().join('/') : (new Date(Date.now())).toLocaleDateString().split('/')._formatDateFromDate().rotateRight(-1).join('/'));
    let gColor = "g-black";
    let market_value = this.state.sale.price || 0;
    let g_l = market_value - (item.purchase_price || 0);
    if (g_l > 0) gColor = "g-green";
    else if (g_l < 0) gColor = "g-red";
    return (
      <tr className="portfolio-row portfolio-item">
        <td className="portfolio-col1">
          <Link to="/profile/"><img className="delete-portfolio-item-btn" src="https://image.flaticon.com/icons/png/512/64/64022.png" onClick={this.handleDelete} height="25px" /></Link>
        </td>
        <td className="portfolio-col2 portfolio-item-info">
          <span className="portfolio-item-pic">
            <img src={product.img_path} width="80px" />
          </span>
          <Link to={`/products/${product.id}/view`}>
            <ul className="portfolio-item-details">
              <li>{product.model}</li>
              <li>{product.name}</li>
              <li>U.S. {size[0] === "M" ? `Men's Size: ${size[1]}` : size[0] === 'F' ? `Women's Size: ${size[1]}` : `Kids' Size: ${size[1]}`}</li>
              <li>{product.release_date ? product.release_date.split('-')[0] : ""}</li>
            </ul>
          </Link>
        </td>
        <td className="portfolio-col3"><p>{date}</p></td>
        <td className="portfolio-col4"><p>${item.purchase_price}</p></td>
        <td className="portfolio-col5"><p>${market_value}</p></td>
        <td className="portfolio-col6"><p className={gColor}>{`$${g_l}(${((g_l / item.purchase_price)*100).toFixed(2)}%)`}</p></td>
      </tr>
    )
  }
}
import React from 'react';
import { withRouter } from 'react-router'

const MARKET_VALUE = 10;

export default class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    if (!this.props.products[this.props.item.product_id]) this.props.fetchProduct(this.props.item.product_id);
    // console.dir(this.props);
  }

  handleDelete() {
    this.props.removeItem(this.props.item.id);
    console.dir(this.context);
    this.props.history.push('/profile/portfolio');
    // this.props.history.push('/profile/portfolio');
  }

  render() {
    let product = (this.props.products[this.props.item.product_id] ? this.props.products[this.props.item.product_id] : {})
    let item = (this.props.item ? this.props.item : {});
    let size = ["n/a", "n/a"];
    if (item) {
      size = item.size.split(' ');
    }
    let date = item.updated_at;
    date = (date ? date.split('T')[0].split('-').join('/') : "");
    let gColor = "g-black";
    let g_l = MARKET_VALUE - (this.props.item.purchase_price || 0);
    if (g_l > 0) gColor = "g-green";
    else if (g_l < 0) gColor = "g-red"
    return (
      <tr className="portfolio-row portfolio-item">
        <td className="portfolio-col1">
          <img className="delete-portfolio-item-btn" src="https://image.flaticon.com/icons/png/512/64/64022.png" onClick={this.handleDelete} height="25px" />
        </td>
        <td className="portfolio-col2 portfolio-item-info">
          <span className="portfolio-item-pic">
            <img src={product.img_path} width="80px" />
          </span>
          <ul className="portfolio-item-details">
            <li>{product.model}</li>
            <li>{product.name}</li>
            <li>U.S. {size[0] === "M" ? `Men's Size: ${size[1]}` : size[0] === 'F' ? `Women's Size: ${size[1]}` : `Kids' Size: ${size[1]}`}</li>
            <li>{product.release_date ? product.release_date.split('-')[0] : ""}</li>
          </ul>
        </td>
        <td className="portfolio-col3"><p>{date}</p></td>
        <td className="portfolio-col4"><p>${this.props.item.purchase_price}</p></td>
        <td className="portfolio-col5"><p>${MARKET_VALUE}</p></td>
        <td className="portfolio-col6"><p className={gColor}>{`$${g_l}(${((g_l / item.purchase_price)*100).toFixed(2)}%)`}</p></td>
      </tr>
    )
  }
}
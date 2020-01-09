import React from 'react';

export default class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.item.product_id);
    // console.dir(this.props);
  }

  handleDelete() {
    this.props.removeItem(this.props.item.id);
  }

  render() {
    let product = (this.props.products[this.props.item.product_id] ? this.props.products[this.props.item.product_id] : {})
    return (
      <div>
        <ul>
          <li><img src={product.img_path} height="100px"/></li>
          <li><p>{product.name}</p></li>
          <li><p>Retail: {product.retail_price}</p></li>
          <li><img className="delete-portfolio-item-btn" src="https://image.flaticon.com/icons/png/512/64/64022.png" onClick={this.handleDelete} height="25px"/></li>
        </ul>
      </div>
    )
  }
}
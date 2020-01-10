import React from 'react';
import isEmpty from '../../utils/obj-util';
import ProductDropdown from './portfolio_form_product_dropdown';

const sizes = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18];

export default class PortfolioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      purchase_price: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const item = Object.assign({}, this.state, {
      size: `${document.getElementById("portfolio-form-size-sex-dropdown").value} ${document.getElementById("portfolio-form-size-num-dropdown").value}`,
      product_id: document.getElementById("portfolio-form-product-dropdown").value
    });
    this.props.addItem(this.state.user_id, item);
    this.props.history.push('/profile/portfolio');
  }

  handleInput(type) {
    return (e) => this.setState({[type]: e.target.value})
  }

  render() {
    let products = (isEmpty(this.props.products) ? [] : Object.values(this.props.products));
    console.dir(products);
    return (
      <div id="portfolio-form">
        <form action="" onSubmit={this.handleSubmit}>
          <label>
            <ProductDropdown products={products} />
          </label>
          <label>
            <select name="size_mfk" defaultValue="default" id="portfolio-form-size-sex-dropdown">
                <option value="default" disabled>Sex</option>
                <option value="M" key="sex-opt-M">M</option>
                <option value="F" key="sex-opt-F">F</option>
                <option value="K" key="sex-opt-K">K</option>
              </select>
              <select name="size_n" defaultValue="default" id="portfolio-form-size-num-dropdown">
                <option value="default" disabled>Size</option>
                {sizes.map(size => (
                  <option value={size} key={`size-opt-${size}`}>{size}</option>
                ))}
              </select>
          </label>
          <label>
              <input type="text" name="purchase_price" id="portfolio-form-price" placeholder="Purchase Price" onChange={this.handleInput('purchase_price')} />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
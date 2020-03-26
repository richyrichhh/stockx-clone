import React from 'react';
import isEmpty from '../../utils/obj-util';
import ProductDropdown from './portfolio_form_product_dropdown';

const sizes = [3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18];

export default class PortfolioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      purchase_price: "",
      errors: this.props.errors
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    // e.preventDefault();
    const itemData = document.getElementById("portfolio-form-product-dropdown").value.split('|jj|');
    let ss = document.getElementById("portfolio-form-size-sex-dropdown").value;
    let sn = document.getElementById("portfolio-form-size-num-dropdown").value;
    const item = Object.assign({}, this.state, {
      size: `${ss || ((!ss && !sn) ? "" : "M ")}${sn || ((!ss && !sn) ? "" : "9")}`,
      product_id: itemData[0],
      model: itemData[1],
      brand: itemData[2]
    });
    this.props.addItem(this.state.user_id, item).then(success => {
      this.props.history.push('/profile/portfolio');
    }, failure => {
      this.setState({errors: this.props.errors});
      $(document.getElementById("portfolio-form-errors")).removeClass('hidden');
    }); 
  }

  handleInput(type) {
    return (e) => {this.setState({[type]: Math.round(e.target.value)})}
  }

  renderErrors() {
    return (
      <ul className="error-list">
        {this.state.errors.map((error, i) => (
          <li className="error-item" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.state.errors = [];
    this.props.resetErrors();
  }

  render() {
    let products = (isEmpty(this.props.products) ? [] : Object.values(this.props.products));
    return (
      <div id="portfolio-form-div">
        <form id="portfolio-form" onSubmit={this.handleSubmit}>
          <label>
            <ProductDropdown products={products} />
          </label>
          <label id="portfolio-input-size">
            <select defaultValue="" id="portfolio-form-size-sex-dropdown">
                <option value="" disabled>Sex</option>
                <option value="M " key="sex-opt-M">M</option>
                <option value="F " key="sex-opt-F">F</option>
                <option value="K " key="sex-opt-K">K</option>
              </select>
              <select defaultValue="" id="portfolio-form-size-num-dropdown">
                <option value="" disabled>Size</option>
                {sizes.map(size => (
                  <option value={size} key={`size-opt-${size}`}>{size}</option>
                ))}
              </select>
          </label>
          <label>
              <input type="number" min="0" step="1" id="portfolio-form-price" placeholder="Purchase Price" onChange={this.handleInput('purchase_price')} />
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <div id="portfolio-form-errors" className="hidden">
          {this.renderErrors()}
        </div>
      </div>
    );
  }
}
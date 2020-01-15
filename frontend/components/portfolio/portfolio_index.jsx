import React from 'react'
import PortfolioItemContainer from './portfolio_item_container';
import isEmpty from '../../utils/obj-util';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router'

export default class PortfolioIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchPortfolio(this.props.currentUser.id);
  }

  render() {
    let portfolio = (isEmpty(this.props.portfolio) ? {} : this.props.portfolio);
    let products = (isEmpty(this.props.products) ? {} : this.props.products);
    return (
      <div id="portfolio-main">
        <span id="portfolio-header">Portfolio</span>
        <table id="portfolio-table">
          <thead id="portfolio-table-heading">
            <tr className="portfolio-row">
              <th className="portfolio-col1"></th>
              <th className="portfolio-col2" id="portfolio-center-this">Name</th>
              <th className="portfolio-col3">Added Date</th>
              <th className="portfolio-col4">Purchase Price</th>
              <th className="portfolio-col5">Market Value</th>
              <th className="portfolio-col6">Gain/Loss</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(portfolio).map(item => isEmpty(item) ? null : <PortfolioItemContainer products={products} item={item} key={`item${item.id}`} />)}
          </tbody>
        </table>

        <Link to="/profile/portfolio/add">Add Item</Link>
      </div>
    )
  }
}

// <ul id="portfolio-list">
//   {Object.values(portfolio).map(item => <PortfolioItemContainer item={item} key={`item${item.id}`} />)}
// </ul>

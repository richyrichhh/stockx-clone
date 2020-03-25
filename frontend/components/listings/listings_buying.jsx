import React from 'react'
import PortfolioItemContainer from './portfolio_item_container';
import PortfolioGraphValues from './portfolio_graph_values';
import isEmpty from '../../utils/obj-util';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

export default class ListingsBuying extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchPortfolio(this.props.currentUser.id).then(() => Object.values(this.props.portfolio).forEach(item => this.props.fetchLastSale(item.product_id)));
  }

  render() {
    let portfolio = this.props.portfolio;
    let products = this.props.products;
    let sales = this.props.sales;
    return (
      <div id="listings-buying">
        <span id="listings-buy-header">Portfolio</span>
        <table id="listings-buy-table">
          <thead id="listings-buy-table-heading">
            <tr className="lbt-row">
              <th className="lbt-col1">Item</th>
              <th className="lbt-col2">Bid Price</th>
              <th className="lbt-col3">Highest Bid</th>
              <th className="lbt-col4">Lowest Ask</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(portfolio).map(item => isEmpty(item) || isEmpty(sales[item.product_id]) ? null : <PortfolioItemContainer products={products} item={item} sales={sales[item.product_id]} key={`item${item.id}`} />)}
          </tbody>
        </table>

        <Link to="/profile/listings/new/buy">Add Item</Link>
      </div>
    )
  }
}

// <ul id="portfolio-list">
//   {Object.values(portfolio).map(item => <PortfolioItemContainer item={item} key={`item${item.id}`} />)}
// </ul>

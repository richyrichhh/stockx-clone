import React from 'react'
import PortfolioItemContainer from './portfolio_item_container';
import isEmpty from '../../utils/obj-util';
import {Link} from 'react-router-dom';

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
    return (
      <div id="portfolio-main">
        <table id="portfolio-table">
          <tr>
            <th>Name</th>
            <th>Added Date</th>
            <th>Purchase Price</th>
            <th>Market Value</th>
            <th>Gain/Loss</th>
          </tr>
          {Object.values(portfolio).map(item => <PortfolioItemContainer item={item} key={`item${item.id}`} />)}
        </table>

        <Link to="/profile/portfolio/add">Add Item</Link>
      </div>
    )
  }
}

// <ul id="portfolio-list">
//   {Object.values(portfolio).map(item => <PortfolioItemContainer item={item} key={`item${item.id}`} />)}
// </ul>
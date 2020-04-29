import React from 'react'
import isEmpty from '../../utils/obj-util';
import ListingItemContainer from './listing_item_container';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

export default class ListingsSelling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    let orders = [];
    this.props.fetchProducts()
      .then(() => this.props.fetchOrdersByUser(this.props.currentUser.id)
      .then((data) => {
        // console.dir(data);
        for (let order of Object.values(data.orders)) {
          if (order.order_type === 'sell') {
            orders.push(order);
          }
        }
        this.setState({orders: orders});
        // console.log(this.state);
        // console.log(data.orders);
      })
    );
    // this.props.fetchPortfolio(this.props.currentUser.id).then(() => Object.values(this.props.portfolio).forEach(item => this.props.fetchLastSale(item.product_id)));
  }

  render() {
    let products = this.props.products;
    return (
      <div id="listings-selling">
        <span id="listings-sell-header">Selling</span>
        <table id="listings-sell-table">
          <thead id="listings-sell-table-heading">
            <tr className="listing-row">
              <th className="listing-col0"></th>
              <th className="listing-col1">Item</th>
              <th className="listing-col2">Ask Price</th>
              <th className="listing-col3">Highest Bid</th>
              <th className="listing-col4">Lowest Ask</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map(order => isEmpty(order) ? null : <ListingItemContainer products={products} order={order} key={`order${order.id}`} />)}
          </tbody>
        </table>

        <Link to="/profile/listings/new" className="new-listing">+ New Order</Link>
      </div>
    )
  }
}

// <ul id="portfolio-list">
//   {Object.values(portfolio).map(item => <PortfolioItemContainer item={item} key={`item${item.id}`} />)}
// </ul>

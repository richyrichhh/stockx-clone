import React from 'react'
import PortfolioItemContainer from './portfolio_item_container';
import PortfolioGraphValues from './portfolio_graph_values';
import isEmpty from '../../utils/obj-util';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

export default class PortfolioIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      portfolio: [],
      products: {},
      sales: {}
    };
  }

  componentDidMount() {
    this.props.fetchProducts().then(data => {
      // console.dir(data);
      this.setState({products: data.products});
    });
    this.props.fetchPortfolio(this.props.currentUser.id).then((data) => {
      // console.dir(data);
      this.setState({portfolio: data.portfolio});
      data.portfolio.forEach(item => {
        this.props.fetchSales(item.product_id).then(data => console.dir(data));
        this.props.fetchLastSale(item.product_id).then((data) => {
          // console.dir(data);
          let newState = this.state.sales;
          newState[item.product_id] = {lastSale: data.sale};
          this.setState({sales: newState});
        });
      })
    });
  }

  render() {
    let portfolio = this.state.portfolio;
    let products = this.state.products;
    let sales = this.state.sales;
    return (
      <div id="portfolio-main">
        <div id="portfolio-graph-outer">
          <PortfolioGraphValues portfolio={portfolio} sales={sales} products={products} />
        </div>

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
            {Object.values(portfolio).map(item => isEmpty(item) || isEmpty(sales[item.product_id]) ? null : <PortfolioItemContainer products={products} item={item} sales={sales[item.product_id]} key={`item${item.id}`} />)}
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

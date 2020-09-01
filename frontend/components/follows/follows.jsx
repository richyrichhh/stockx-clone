import React from 'react'
import isEmpty from '../../utils/obj-util';
import FollowItemContainer from './follow_item_container';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

export default class Follows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      follows: []
    }
  }

  componentDidMount() {
    let follows = [];
    // console.dir(this.props);

    this.props.fetchProducts()
      .then(() => this.props.fetchFollows(this.props.currentUser.id)
      .then((data) => {
        // console.dir(data);
        for (let follow of Object.values(data.follows)) {
          let prod = Object.assign({}, this.props.products[follow.product_id]);
          prod.f_id = follow.id;
          follows.push(prod);
        }
        this.setState({follows: follows});
        // console.log(this.state);
        // console.log(data.follows);
      })
    );
    // this.props.fetchPortfolio(this.props.currentUser.id).then(() => Object.values(this.props.portfolio).forEach(item => this.props.fetchLastSale(item.product_id)));
  }

  render() {
    let products = this.props.products;
    console.log(this.state.follows);
    if (this.state.follows.length === 0) {
      return (
        <div id="follows-div">
          <div id="follows-info-text">
            Follow an item to track it here.
          </div>
        </div>
      )
    } else return (
      <div id="follows-div">
        <span id="follows-header">Following</span>
        <table id="follows-table">
          <thead id="follows-table-heading">
            <tr className="fl-row">
              <th className="fl-col0"></th>
              <th className="fl-col1">Item</th>
              <th className="fl-col2">Highest Bid</th>
              <th className="fl-col3">Lowest Ask</th>
            </tr>
          </thead>
          <tbody>
            {this.state.follows.map(follow => isEmpty(follow) ? null : <FollowItemContainer follow={follow} key={`f${follow.f_id}`} />)}
          </tbody>
        </table>
      </div>
    )
  }
}

// <ul id="portfolio-list">
//   {Object.values(portfolio).map(item => <PortfolioItemContainer item={item} key={`item${item.id}`} />)}
// </ul>

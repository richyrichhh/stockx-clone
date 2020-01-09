import React from 'react'
import PortfolioItemContainer from './portfolio_item_container';

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
    this.props.fetchPortfolio(this.props.currentUser.id);
  }

  render() {
    let portfolio = (this.isEmpty(this.props.portfolio) ? {} : this.props.portfolio)
    return (
      <div id="portfolio-main">
        <ul id="portfolio-list">
          {Object.values(portfolio).map(item => <PortfolioItemContainer item={item} key={`item${item.id}`} />)}
        </ul>
      </div>
    )
  }
}
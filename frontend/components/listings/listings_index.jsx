import React from 'react'
import isEmpty from '../../utils/obj-util';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

export default class ListingsBuying extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div id="listings-index-div">
        <Link to="/profile/listings/buying">Buying</Link>
        <Link to="/profile/listings/selling">Selling</Link>
      </div>
    )
  }
}

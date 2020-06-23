import React from 'react';
import { Link } from 'react-router-dom';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if (this.props.loggedIn) {
    //   return (
    //     <div id="splash-div">
    //       <Link to="/profile">Profile</Link>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div id="splash-div">
    //       <Link to="/login">Log In</Link>
    //       <Link to="/register">Register</Link>
    //     </div>
    //   )
    // }
    return (
      <div id="splash-div">
        <img src="https://wallpapercave.com/wp/wp3408855.jpg"/>
        <div id="splash-bg">

        </div>
        <ul>
          <li>
            Welcome to StockY: a marketplace for sneakers!
          </li>
          <li>
            This website is a clone of popular exchange StockX, which serves as a marketplace for collector sneakers, clothing, and accessories.
          </li>
          <li>
            Here, you are able to buy and sell various products. Bought products are automatically added to your portfolio, which will track price changes as well as any gains or losses in your inventory.
          </li>
          <li>
            You may also add items to a watch list, allowing you to track their price and see the highest price others are willing to pay for it, or the lowest price you are able to buy it for immediately.
          </li>
          <li>
            Market prices of items are automatically updated to the last sale price of the item.
          </li>
          <li>
            Please register for an account or login as a guest to begin!
          </li>
        </ul>
      </div>
    )
  }
}
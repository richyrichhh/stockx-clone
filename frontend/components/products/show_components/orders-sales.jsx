import React from 'react';
import { Link } from 'react-router-dom';
const SIZES = [3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18]

const formatMoney = (number) => {
  let n;
  if(number < 0) {
    n = number.toString().split('');
    n.splice(1, 0, '$');
    return n;
  } else {
    return `$${number}`;
  }
};

export default ({product, sales, orders}) => {
  console.dir(sales);
  if (sales.length === 0) sales = [{price: 0}, {price: 0}];
  if (sales.length === 1) sales.unshift({price: 1})
  let sEnd = sales.length - 1;
  let oEnd = orders.length - 1;
  let lastDiff = (sales[sEnd].price - sales[sEnd - 1].price);
  return (
    <div id="product-orders">
      <span id="product-orders-size">
        <p>Size</p> 
        <span>All<input type="hidden" name="This span will become a dropdown" /></span> 
      </span>
      <span id="this-will-be-a-gray-line"></span>
      <span id="product-orders-last-sale">
        <span id="p-last-sale-top">
          <p className="last-sale-bold">Last Sale</p>
          <p id="last-sale-num">{formatMoney(sales[sEnd].price)}</p> <p id="last-sale-change" style={lastDiff > 0 ? {color: 'green'} : lastDiff < 0 ? {color: 'red'} : {color: 'black'}}>{`${formatMoney(lastDiff)} (${lastDiff / sales[sEnd - 1].price}%)`} </p>
        </span>
        <span id="p-last-sale-bottom">
          <p>Size {sales[sEnd].size}</p>
          <span className="smaller-gray-line"></span> 
          <p>View All Sales</p>
        </span>
      </span>
      <span id="prod-asks">
        <Link to="#">
          <span id="asks-left">
            <p id="p-ask-price">$500</p>
            <p>Lowest Ask</p>
          </span>
          <span id="asks-right">
            <p>Buy</p>
            <p>or Bid</p>
          </span>
        </Link>
        <span id="asks-bottom">
          <p>Size 8</p>
          <span className="smaller-gray-line"></span>
          <p>View All Asks</p>
        </span>
      </span>
      <span id="prod-bids">
        <Link to="#">
          <span id="bids-left">
            <p>$500</p>
            <p>Lowest Bid</p>
          </span>
          <span id="bids-right">
            <p>Sell</p>
            <p>or Ask</p>
          </span>
        </Link>
        <span id="bids-bottom">
          <p>Size 8</p>
          <span className="smaller-gray-line"></span>
          <p>View All Bids</p>
        </span>
      </span>
    </div>
  )
}
import React from 'react';
import { Link } from 'react-router-dom';
const SIZES = [3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18]

const formatMoney = (number) => {
  let n;
  if(number < 0) {
    n = number.toString().split('');
    n.splice(1, 0, '$');
    return n.join('');
  } else {
    return `$${number}`;
  }
};

export default ({product, sales, orders, updateOrder, createSale, addItem, currentUserId}) => {
  currentUserId = parseInt(currentUserId);
  if (sales.length === 0) sales = [{price: 0}, {price: 0}];
  if (sales.length === 1) sales.unshift({price: 1})
  let sEnd = sales.length - 1;
  let hBid = orders[0].price || -1;
  let lAsk = orders[1].price || -1;
  let lastDiff = (sales[sEnd].price - sales[sEnd - 1].price);
  // console.log(lastDiff);

  let handleBuy = () => {
    if (currentUserId === -1) {
      location.href = location.origin + `/#/login`;
      // return false;
    }
    else if (lAsk === -1) {
      window.location.href = window.location.origin + `/#/profile/listings/new`;
    } else {
      // console.log(orders[1]);
      let updatedOrder = Object.assign({}, orders[1]);
      updatedOrder.active = false;
      updatedOrder.sold = true;
      updateOrder(updatedOrder).then(() => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        let dateString = `${yyyy}-${mm}-${dd}`;
        let sale = {
          order_id: orders[1].id,
          product_id: orders[1].product_id,
          price: orders[1].price,
          sex: orders[1].sex,
          size: orders[1].size,
          active: 'true',
          date: dateString
        }
        createSale(sale).then(() => {
          let pItem = {
            purchase_price: orders[1].price,
            product_id: orders[1].product_id,
            user_id: currentUserId,
            size: `${orders[1].sex} ${orders[1].size}`
          }
          addItem(pItem.user_id, pItem).then(() => {
            window.location.href = window.location.origin + `/#/profile/portfolio`;
          })
        })
      })
    }
  }

  handleBuy = handleBuy.bind(this);

  let handleSell = () => {
    if (currentUserId === -1) {
      window.location.href = window.location.origin + `/#/login`;
    }
    else if (hBid === -1) {
      window.location.href = window.location.origin + `/#/profile/listings/new`;
    } else {
      // console.log(orders[0]);
      let updatedOrder = Object.assign({}, orders[0]);
      updatedOrder.active = false;
      updatedOrder.sold = true;
      updateOrder(updatedOrder).then(() => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        let dateString = `${yyyy}-${mm}-${dd}`;
        let sale = {
          order_id: orders[0].id,
          product_id: orders[0].product_id,
          price: orders[0].price,
          sex: orders[0].sex,
          size: orders[0].size,
          active: 'true',
          date: dateString
        }
        createSale(sale).then(() => {
          // let pItem = {
          //   purchase_price: orders[0].price,
          //   product_id: orders[0].product_id,
          //   user_id: currentUserId,
          //   size: `${orders[0].sex} ${orders[0].size}`
          // }
          // addItem(pItem).then(() => {
            location.reload();
            // window.location.href = window.location.origin + `/#/profile/portfolio`;
          // })
        })
      })
    }
  }

  handleSell = handleSell.bind(this);

  return (
    <div id="product-orders">
      <span id="product-orders-size">
        <p>Size</p> 
        <span>All<input type="hidden" /></span> 
      </span>
      <span id="this-will-be-a-gray-line"></span>
      <span id="product-orders-last-sale">
        <span id="p-last-sale-top">
          <p className="last-sale-bold">Last Sale</p>
          <p id="last-sale-num">{formatMoney(sales[sEnd].price)}</p> <p id="last-sale-change" style={lastDiff > 0 ? {color: 'green'} : lastDiff < 0 ? {color: 'red'} : {color: 'black'}}>{`${formatMoney(lastDiff)} (${Math.round((lastDiff * 100) / sales[sEnd - 1].price)}%)`} </p>
        </span>
        <span id="p-last-sale-bottom">
          {/* <p>Size {sales[sEnd].size}</p>
          <span className="smaller-gray-line"></span> 
          <p>View All Sales</p> */}
        </span>
      </span>
      <span id="prod-asks">
        <button onClick={() => handleBuy()}>
          <span id="asks-left">
            <p id="p-ask-price">{lAsk === -1 ? `n/a` : `$${lAsk}`}</p>
            <p>Lowest Ask</p>
          </span>
          <span id="asks-right">
            <p id="asks-right-big">Buy</p>
            {/* <p id="asks-right-small">or Bid</p> */}
          </span>
        </button>
        <span id="asks-bottom">
          {/* <p>Size 8</p>
          <span className="smaller-gray-line"></span>
          <p>View All Asks</p> */}
        </span>
      </span>
      <span id="prod-bids">
        <button to="#" onClick={() => handleSell()}>
          <span id="bids-left">
            <p className="bids-right-big">{hBid === -1 ? `n/a` : `$${hBid}`}</p>
            <p className="bids-right-small">Highest Bid</p>
          </span>
          <span id="bids-right">
            <p className="bids-right-big">Sell</p>
            {/* <p className="bids-right-small">or Ask</p> */}
          </span>
        </button>
        <span id="bids-bottom">
          {/* <p>Size 8</p>
          <span className="smaller-gray-line"></span>
          <p>View All Bids</p> */}
        </span>
      </span>
    </div>
  )
}
import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import isEmpty from '../../utils/obj-util';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default ( {portfolio, sales, products} ) => {
  let graphData = [];
  let nike = {y: 0, label: 'Nike'};
  let jordan = {y: 0, label: 'Jordan'};
  let adidas = {y: 0, label: 'adidas'};
  // console.dir(sales);
  if (!isEmpty(sales)) {
    // console.dir(sales);
    // console.dir(portfolio);
    Object.values(portfolio).forEach(item => {
      // console.dir(item);
      if (products[item.product_id].brand === 'Nike') {
        if (sales[item.product_id]) {
          // console.log('nike');
          // console.log(item.product_id);
          // console.log(sales[item.product_id]);
          nike.y += sales[item.product_id].lastSale.price;
        } else {
          nike.y += item.purchase_price;
        }
      } else if (products[item.product_id].brand === 'Jordan') {
        if (sales[item.product_id]) {
          // console.log('jordan');
          // console.log(item.product_id);
          // console.log(sales[item.product_id]);
          jordan.y += sales[item.product_id].lastSale.price;
        } else {
          jordan.y += item.purchase_price;
        }
      } else if (products[item.product_id].brand === 'adidas') {
        if (sales[item.product_id]) {
          adidas.y += sales[item.product_id].lastSale.price;
        } else {
          adidas.y += item.purchase_price;
        }
      }
    });
  }
  if (nike.y > 0) graphData.push(nike);
  if (jordan.y > 0) graphData.push(jordan);
  if (adidas.y > 0) graphData.push(adidas);
  // console.dir(graphData);
  const options = {
    theme: "light2",
    animationEnabled: true,
    exportFileName: "MARKET VALUE",
    exportEnabled: true,
    title: {
      text: "MARKET VALUE",
      fontFamily: 'proxima-nova, sans-serif',
      color: 'black'
    },
    data: [{
      type: "pie",
      showInLegend: true,
      legendText: "{label}",
      toolTipContent: "{label}: <strong>${y}</strong>",
      indexLabel: "${y}",
      indexLabelPlacement: "inside",
      dataPoints: graphData.length ? graphData : null //(!isEmpty(sales) ? Object.values(portfolio).map(item => (sales[item.product_id] ? { y: sales[item.product_id].lastSale.price, label: products[item.product_id].brand } : {y: 0, label: ""})) : null)
      // [
      //   { y: 32, label: "Health" },
      //   { y: 22, label: "Finance" },
      //   { y: 15, label: "Education" },
      //   { y: 19, label: "Career" },
      //   { y: 5, label: "Family" },
      //   { y: 7, label: "Real Estate" }
      // ]
    }]
  }
  
  return (
    <div id="portfolio-graph-values">
      <CanvasJSChart options={options}
      /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
}
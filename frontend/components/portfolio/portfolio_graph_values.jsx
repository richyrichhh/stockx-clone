import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import isEmpty from '../../utils/obj-util';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default ( {portfolio, sales, products} ) => {
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
      dataPoints: (!isEmpty(sales) ? Object.values(portfolio).map(item => (sales[item.product_id] ? { y: sales[item.product_id].lastSale.price, label: products[item.product_id].brand } : {y: 0, label: ""})) : null)
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
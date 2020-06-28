# Stock-Y

[Link to site](https://stock-y.herokuapp.com/#/)

StockY is a full-stack sneaker exchange web application that
uses realtime price tracking to allow users to buy and sell
sneakers at fair market values and low transaction costs. It was 
modeled after the StockX clothing/shoe exchange web app.

### Features

+ Search for shoes by model, brand, or name.
+ Tracks past sales to provide fair and accurate prices.
+ Visualize and track historical shoe prices.
+ Builds portfolio of shoes, tracking changes in their market values.
+ Shoes can be added to a watchlist.
+ Easily buy and sell shoes.

### Technologies

+ Ruby on Rails backend
+ React.js frontend
+ Canvas.JS API
+ Object Oriented Programming
+ CSS
+ PostgreSQL database

## Demos

### Data Visualization

Market values for items in the portfolio are tracked by last sale price.
The graph on the page is created using CanvasJS. Once the components mount,
the portfolio page will fetch last sale data for each item in the portfolio
and then provide the prices for the library to render.

+ Users can add or remove portfolio items and have the chart update in real
  time.
+ Users can toggle the chart and see other data such as product count, average
  market prices, as well as resell price premiums for each brand. However,
  this has not been implemented yet.

![Portfolio Graph](https://github.com/richyrichhh/stockx-clone/blob/master/screenshots/sample-portfolio-graph.png?raw=true)

![Portfolio Item](https://github.com/richyrichhh/stockx-clone/blob/master/screenshots/sample-portfolio.png?raw=true)

Prices are also tracked on each individual product show page, allowing users
to track historical price data in greater detail over long periods of time.
However, this has not yet been implemented.



### Trading On The Site

Trading on the site is akin to trading stocks, with the app tracking realtime
sell shares of the specific company. Bids and asks from other users are 
tracked realtime and displayed on the product show, while the last sale price 
is displayed along with any recent price changes to allow for comparisons and
offer better judgment on trades.

![Trading](https://github.com/richyrichhh/stockx-clone/blob/master/screenshots/sample-prices.png?raw=true)


## Select Code Snippets

**`Search`**

The following code renders search results for the user. If there are no search results, the user will be notified.

```
  render() {
    let products = this.state.filtered;

    if (products.length === 0) return (
      <div id="products-index-div">
        <b className="center-everything">
          No search results found.

        </b>
      </div>
    )

    else return (
      <div id="products-index-div">
        <ul id="products-list">
          {products.map(product => (
            <ProductsIndexItem product={product} key={`product${product.id}`} />
          ))}
        </ul>
      </div>
    )
  }
```

**`SalesController`**

Three functions provide functionality for the profile and products show page,
allowing past sales to be fetched by product and size, or just grab the last sale 
of a specific product which keeps memory usage low while still having the
necessary data to build graphs for data visualization.

```
  def product_index
    @sales = Product.find(params[:product_id]).sales
    render :index
  end

  def product_last_sale
    @sale = Product.find(params[:product_id]).sales.order('date desc').limit(1)[0]
    render :show
  end

  def product_size_index
    @sales = Product.find(params[:product_id]).sales.where("sales.size = #{params[:size]}")
    render :index
  end
```

**`PortfolioItem`**

The following code renders each individual item on the portfolio page, taking
the data from the database and turning it into something useful for the user.

```
  let product = this.state.product;
  let item = this.state.item;
  if (isEmpty(product) || isEmpty(item)) return (null);
  let size = ["n/a", "n/a"];
  if (item) size = item.size.split(' ');
  let date = item.updated_at;
  date = (date ? date.split('T')[0].split('-')._formatDateFromString().join('/') : (new Date(Date.now())).toLocaleDateString().split('/')._formatDateFromDate().rotateRight(-1).join('/'));
  let gColor = "g-black";
  let market_value = this.state.sale.price || 0;
  let g_l = market_value - (item.purchase_price || 0);
  if (g_l > 0) gColor = "g-green";
  else if (g_l < 0) gColor = "g-red";
```

## Future Development

+ Add historical price graphs
+ Make the profile page actually look good

![Homepage](https://github.com/richyrichhh/stockx-clone/blob/master/screenshots/home-page.png?raw=true)


[Link to site](https://stock-y.herokuapp.com/#/)
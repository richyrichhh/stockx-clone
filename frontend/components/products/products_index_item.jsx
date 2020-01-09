import React from 'react';
import { Link } from 'react-router-dom';


export default ({ product }) => {
  const linkPath = `/products/${product.id}`
  console.dir(product);
  return (
    <li className="products-index-item">
      <Link to={linkPath}><img src={product.img_path} height="250px" />
        <h3>{product.name}</h3></Link>
    </li>
  );
}

//<li><p>{product.description}</p></li>
//<li><strong>Retail Price: </strong>{product.retail_price}</li>
//<li><strong>Release Date: </strong>{product.release_date}</li>
//<li><span class="product-style-code">{product.style_code}</span></li>

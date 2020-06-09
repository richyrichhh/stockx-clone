import React from 'react';
import { Link } from 'react-router-dom';


export default ({ product }) => {
  const linkPath = `/products/${product.id}/view`
  // console.dir(product);
  return (
    <li className="products-index-item">
      <Link to={linkPath}>
        <span className="products-index-img">
          <img src={product.img_path} />
        </span>
        <span className="products-index-tag">
          <h3>
            <ul>
              <li>
                {product.model}
              </li>
              <li>
                "{product.name}"
              </li>
              <li className="prod-style-code">
                {product.style_code}
              </li>
            </ul>
          </h3>
        </span>
      </Link>
    </li>
  );
}

//<li><p>{product.description}</p></li>
//<li><strong>Retail Price: </strong>{product.retail_price}</li>
//<li><strong>Release Date: </strong>{product.release_date}</li>
//<li><span class="product-style-code">{product.style_code}</span></li>

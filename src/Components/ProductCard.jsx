import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2>{product.name}</h2>
        {/* <p>{product.description.substring(0, 55).concat('...')}</p> */}
        <span>PRICE : ₹</span>
        <strong>{product.price}</strong>
      </div>
      <div className="card-footer">
        <Link to={`/product/${product.id}`} className="outline-btn action-btn">
          View
        </Link>
        <button className="fill-btn action-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

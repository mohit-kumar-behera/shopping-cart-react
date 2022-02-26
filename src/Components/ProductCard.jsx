import React from 'react';
import { Link } from 'react-router-dom';

import AddToCartBtn from './CartButton/AddToCartBtn';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2>{product.name}</h2>
        <span>PRICE : ₹</span>
        <strong>{product.price}</strong>
      </div>
      <div className="card-footer">
        <Link to={`/product/${product.id}`} className="outline-btn action-btn">
          View
        </Link>
        <AddToCartBtn productId={product.id} />
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

import products from '../data/product_data';

const Product = () => {
  const { id } = useParams();

  const prod = products.find(prod => prod.id === id);
  return (
    <div className="product-container">
      <h1>{prod.name}</h1>
      <p>{prod.description}</p>
      <p>
        <span>PRICE : ₹</span>
        <strong>{prod.price}</strong>
      </p>

      <button className="action-btn fill-btn">ADD TO CART</button>
    </div>
  );
};

export default Product;

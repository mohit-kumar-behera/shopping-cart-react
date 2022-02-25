import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { CART_TYPE } from '../Pages/Cart';

const CartItem = ({ type }) => {
  const [count, setCount] = useState(1);

  const isCart = type === CART_TYPE.CART;

  const increment = () => {
    setCount(prevState => prevState + 1);
  };

  const decrement = () => {
    setCount(prevState => prevState - 1);
  };

  return (
    <div className="cart-item">
      <h3>Name of product</h3>
      <p>
        <span>PRICE : </span>
        <strong>₹{245.0}</strong>
      </p>
      {isCart && (
        <div className="qty-container">
          <span>Quantity</span>
          <button className="increment" onClick={decrement}>
            -
          </button>
          <span className="qty-box">{count}</span>
          <button className="decrement" onClick={increment}>
            +
          </button>
        </div>
      )}
      <div className="action">
        <Link
          to={`/product/9hf7-8b32-9834-9823`}
          className="outline-btn action-btn"
        >
          View
        </Link>
        {isCart && (
          <>
            <button className="action-btn success">Move to Wishlist</button>
            <button className="action-btn danger">Remove from Cart</button>
          </>
        )}
        {!isCart && (
          <>
            <button className="action-btn success">Move to Cart</button>
            <button className="action-btn danger">Remove from Wishlist</button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartItem;

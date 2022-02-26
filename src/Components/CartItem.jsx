import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { CART_TYPE } from '../Pages/Cart';
import AddToCartBtn from './CartButton/AddToCartBtn';
import AddToWishlistBtn from './CartButton/AddToWishlistBtn';
import RemoveFromCartBtn from './CartButton/RemoveFromCartBtn';
import RemoveFromWishlistBtn from './CartButton/RemoveFromWishlistBtn';
import { setQuantity } from '../redux/Cart/action';

import useItemQuantity from '../CustomHook/useItemQuantity';

const CartItem = ({ type, item, setQuantity }) => {
  const [_, setCount] = useItemQuantity(item, setQuantity);

  const isCart = type === CART_TYPE.CART;

  const increment = () => {
    setCount(prevState => prevState + 1);
  };

  const decrement = () => {
    setCount(prevState => (prevState !== 1 ? prevState - 1 : 1));
  };

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>
        <span>PRICE : </span>
        <strong>₹{item.price}</strong>
      </p>
      {isCart && (
        <div className="qty-container">
          <span>Quantity</span>
          <button className="increment" onClick={decrement}>
            -
          </button>
          <span className="qty-box">{item.qty}</span>
          <button className="decrement" onClick={increment}>
            +
          </button>
        </div>
      )}
      <div className="action">
        <Link to={`/product/${item.id}`} className="outline-btn action-btn">
          View
        </Link>

        {isCart && (
          <>
            <AddToWishlistBtn productId={item.id} />
            <RemoveFromCartBtn
              productId={item.id}
              className="action-btn danger"
            />
          </>
        )}

        {!isCart && (
          <>
            <AddToCartBtn
              productId={item.id}
              text="MOVE TO CART"
              className="action-btn success"
            />
            <RemoveFromWishlistBtn productId={item.id} />
          </>
        )}
      </div>
    </div>
  );
};

export default connect(null, { setQuantity })(CartItem);

import React from 'react';

import CartItems from '../Components/CartItems';
import Checkout from '../Components/Checkout';
import WishList from '../Components/WishList';
import './Cart.css';

export const CART_TYPE = {
  WISHLIST: 'wishlist',
  CART: 'cart',
};

const Cart = () => {
  return (
    <div className="cart-wrapper">
      <div className="left-content">
        <CartItems />
        <WishList />
      </div>
      <div className="right-content">
        <Checkout />
      </div>
    </div>
  );
};

export default Cart;

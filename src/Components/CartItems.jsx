import React from 'react';

import { CART_TYPE } from '../Pages/Cart';
import CartItem from './CartItem';

const CartItems = () => {
  return (
    <div className="cart-items">
      <h1 style={{ marginBottom: '1rem' }}>Your Cart</h1>
      <CartItem type={CART_TYPE.CART} />
      <CartItem type={CART_TYPE.CART} />
    </div>
  );
};

export default CartItems;

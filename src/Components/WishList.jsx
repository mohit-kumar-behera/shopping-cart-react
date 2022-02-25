import React from 'react';

import { CART_TYPE } from '../Pages/Cart';
import CartItem from './CartItem';

const WishList = () => {
  return (
    <div className="wishlist-items">
      <h1 style={{ marginBottom: '1rem' }}>WISHLIST</h1>
      <CartItem type={CART_TYPE.WISHLIST} />
      <CartItem type={CART_TYPE.WISHLIST} />
    </div>
  );
};

export default WishList;

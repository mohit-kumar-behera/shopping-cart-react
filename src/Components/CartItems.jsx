import React from 'react';
import { connect } from 'react-redux';

import { CART_TYPE } from '../Pages/Cart';
import CartItem from './CartItem';
import Loader from './Loader';

const CartItems = ({ cart }) => {
  const buildCart = () => {
    return cart.length ? (
      cart.map(item => (
        <CartItem key={item.id} type={CART_TYPE.CART} item={item} />
      ))
    ) : (
      <h3>There are currently no Items in the Cart</h3>
    );
  };

  return (
    <div className="cart-items">
      <h1 style={{ marginBottom: '1rem' }}>Your Cart</h1>
      {cart ? buildCart() : <Loader />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(CartItems);

import React from 'react';
import { connect } from 'react-redux';

const Checkout = ({ cart }) => {
  const getTotalPrice = () => {
    const totalAmount = 0;

    if (!cart.length) return totalAmount;

    return cart.reduce(
      (amt, item) => amt + +item.price * item.qty,
      totalAmount
    );
  };

  return (
    <div className="checkout-div">
      <h1>Cart Summary</h1>
      <h3>Total Price : ₹{getTotalPrice()}</h3>
      <strong>Apply Coupon Code</strong>
      <div className="coupon-code">
        <input type="text" className="coupon-code-input" spellCheck="false" />
        <button className="action-btn coupon-code-btn">APPLY</button>
      </div>
      <button className="action-btn checkout-btn">PROCEED TO CHECKOUT</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(Checkout);

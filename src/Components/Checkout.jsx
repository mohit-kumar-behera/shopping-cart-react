import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Checkout = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let totalAmount = 0;

    totalAmount = cart.reduce(
      (amt, item) => amt + +item.price * item.qty,
      totalAmount
    );

    setTotalPrice(totalAmount);
  }, [cart]);

  return (
    <div className="checkout-div">
      <h1>Cart Summary</h1>
      <h3>Total Price : ₹{totalPrice}</h3>
      {totalPrice ? (
        <>
          <strong>Apply Coupon Code</strong>
          <div className="coupon-code">
            <input
              type="text"
              className="coupon-code-input"
              spellCheck="false"
            />
            <button className="action-btn coupon-code-btn">APPLY</button>
          </div>
        </>
      ) : (
        ''
      )}

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

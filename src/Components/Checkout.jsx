import React from 'react';

const Checkout = () => {
  return (
    <div className="checkout-div">
      <h1>Cart Summary</h1>
      <h3>Total Price : ₹5670.00</h3>
      <strong>Apply Coupon Code</strong>
      <div className="coupon-code">
        <input type="text" className="coupon-code-input" spellCheck="false" />
        <button className="action-btn coupon-code-btn">APPLY</button>
      </div>
      <button className="action-btn checkout-btn">PROCEED TO CHECKOUT</button>
    </div>
  );
};

export default Checkout;

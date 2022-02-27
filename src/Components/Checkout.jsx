import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { applyCouponCode } from '../redux/Coupon/action';

const Checkout = ({ cart, appliedCoupon, applyCouponCode }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponCode, setCouponCode] = useState('');

  useEffect(() => {
    let totalAmount = 0;

    totalAmount = cart.reduce(
      (amt, item) => amt + +item.price * item.qty,
      totalAmount
    );

    totalAmount = appliedCoupon
      ? totalAmount - totalAmount * 0.01 * appliedCoupon.discountPercentage
      : totalAmount;

    setTotalPrice(Math.round(totalAmount));
  }, [cart, appliedCoupon]);

  const onClickHandler = () => applyCouponCode(couponCode);

  return (
    <div className="checkout-div">
      <h1>Cart Summary</h1>
      <h3>Total Price : ₹{totalPrice}</h3>
      {totalPrice ? (
        <>
          <strong>Apply Coupon Code</strong>
          {appliedCoupon && (
            <p style={{ marginTop: '0.5rem' }}>
              <label style={{ fontSize: '1.2rem', color: 'lightcoral' }}>
                <strong>{appliedCoupon.code}</strong> is applied,{' '}
                <strong>{appliedCoupon.discountPercentage}% OFF</strong>
              </label>
            </p>
          )}

          <div className="coupon-code">
            <input
              type="text"
              className="coupon-code-input"
              spellCheck="false"
              value={couponCode}
              onChange={e => setCouponCode(e.target.value)}
            />
            <button
              className="action-btn coupon-code-btn"
              onClick={onClickHandler}
            >
              APPLY
            </button>
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
    appliedCoupon: state.coupon.appliedCoupon,
  };
};

export default connect(mapStateToProps, { applyCouponCode })(Checkout);

import React from 'react';
import { connect } from 'react-redux';

import { removeFromCart } from '../../redux/Cart/action';

const RemoveFromCartBtn = ({ text, className, productId, removeFromCart }) => {
  const onClickHandler = () => {
    removeFromCart(productId);
  };

  return (
    <button className={className} onClick={onClickHandler}>
      {text}
    </button>
  );
};

RemoveFromCartBtn.defaultProps = {
  text: 'REMOVE FROM CART',
  className: 'action-btn',
};

export default connect(null, { removeFromCart })(RemoveFromCartBtn);

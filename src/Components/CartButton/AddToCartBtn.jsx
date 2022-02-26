import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../redux/Cart/action';

const AddToCartBtn = ({ text, className, productId, addToCart }) => {
  const onClickHandler = () => {
    addToCart(productId);
  };

  return (
    <button className={className} onClick={onClickHandler}>
      {text}
    </button>
  );
};

AddToCartBtn.defaultProps = {
  text: 'ADD TO CART',
  className: 'fill-btn action-btn',
};

export default connect(null, { addToCart })(AddToCartBtn);

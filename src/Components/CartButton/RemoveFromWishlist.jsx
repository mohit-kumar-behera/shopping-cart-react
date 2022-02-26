import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../redux/Cart/action';

const AddToCartBtn = ({ text, productId, addToCart }) => {
  const addToCartHandler = () => {
    addToCart(productId);
  };

  return (
    <button className="fill-btn action-btn" onClick={addToCartHandler}>
      {text}
    </button>
  );
};

AddToCartBtn.defaultProps = {
  text: 'ADD TO CART',
};

export default connect(null, { addToCart })(AddToCartBtn);

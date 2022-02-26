import React from 'react';
import { connect } from 'react-redux';

import { addToWishist } from '../../redux/Cart/action';

const AddToWishlistBtn = ({ text, className, productId, addToWishist }) => {
  const onClickHandler = () => {
    addToWishist(productId);
  };

  return (
    <button className={className} onClick={onClickHandler}>
      {text}
    </button>
  );
};

AddToWishlistBtn.defaultProps = {
  text: 'MOVE TO WISHLIST',
  className: 'action-btn success',
};

export default connect(null, { addToWishist })(AddToWishlistBtn);

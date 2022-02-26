import React from 'react';
import { connect } from 'react-redux';

import { removeFromWishist } from '../../redux/Cart/action';

const RemoveFromWishlistBtn = ({
  text,
  className,
  productId,
  removeFromWishist,
}) => {
  const onClickHandler = () => {
    removeFromWishist(productId);
  };

  return (
    <button className={className} onClick={onClickHandler}>
      {text}
    </button>
  );
};

RemoveFromWishlistBtn.defaultProps = {
  text: 'REMOVE FROM WISHLIST',
  className: 'action-btn danger',
};

export default connect(null, { removeFromWishist })(RemoveFromWishlistBtn);

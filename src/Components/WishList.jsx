import React from 'react';
import { connect } from 'react-redux';

import { CART_TYPE } from '../Pages/Cart';
import CartItem from './CartItem';
import Loader from './Loader';

const WishList = ({ wishlist }) => {
  const buildWishlist = () => {
    return wishlist.length ? (
      wishlist.map(item => (
        <CartItem key={item.id} type={CART_TYPE.WISHLIST} item={item} />
      ))
    ) : (
      <h3>There are currently no Items in the Wishlist</h3>
    );
  };

  return (
    <div className="wishlist-items">
      <h1 style={{ marginBottom: '1rem' }}>WISHLIST</h1>
      {wishlist ? buildWishlist() : <Loader />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    wishlist: state.cart.wishlist,
  };
};

export default connect(mapStateToProps)(WishList);

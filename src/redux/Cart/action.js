import * as actionTypes from './action-type';

export const addToCart = productId => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: { id: productId },
  };
};

export const removeFromCart = productId => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: { id: productId },
  };
};

export const setQuantity = (productId, qty) => {
  return {
    type: actionTypes.SET_QUANTITY,
    payload: { id: productId, qty },
  };
};

export const addToWishist = productId => {
  return {
    type: actionTypes.ADD_TO_WISHLIST,
    payload: { id: productId },
  };
};

export const removeFromWishist = productId => {
  return {
    type: actionTypes.REMOVE_FROM_WISHLIST,
    payload: { id: productId },
  };
};

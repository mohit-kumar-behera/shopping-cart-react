import * as actionTypes from './action-type';

import products from '../../data/product_data';

const INITIAL_STATE = {
  cart: [],
  wishlist: [],
};

const cartReducer = (state = INITIAL_STATE, action = null) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const productToAdd = products.find(prod => prod.id === action.payload.id);
      const productInCart = state.cart.find(item =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: productInCart
          ? state.cart.map(item =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...productToAdd, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {};
    case actionTypes.SET_QUANTITY:
      return {};
    case actionTypes.ADD_TO_WISHLIST:
      return {};
    case actionTypes.REMOVE_FROM_WISHLIST:
      return {};
    default:
      return state;
  }
};

export default cartReducer;

import { FETCH_ALL_PRODUCTS, FETCH_SINGLE_PRODUCT } from './action-type';

import products from '../../data/product_data';

const INITIAL_STATE = {
  products: [],
  currProduct: null,
};

const productReducer = (state = INITIAL_STATE, action = null) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return {
        ...state,
        products,
      };
    case FETCH_SINGLE_PRODUCT:
      return {
        ...state,
        currProduct: products.find(prod => prod.id === action.payload.id),
      };
    default:
      return state;
  }
};

export default productReducer;

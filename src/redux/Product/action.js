import { FETCH_ALL_PRODUCTS, FETCH_SINGLE_PRODUCT } from './action-type';

export const fetchAllProducts = () => {
  return {
    type: FETCH_ALL_PRODUCTS,
  };
};

export const fetchSingleProduct = id => {
  return {
    type: FETCH_SINGLE_PRODUCT,
    payload: { id },
  };
};

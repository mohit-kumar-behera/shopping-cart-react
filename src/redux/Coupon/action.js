import * as actionTypes from './action-type';

export const fetchAllCoupon = () => {
  return {
    type: actionTypes.FETCH_ALL_COUPON,
  };
};

export const applyCouponCode = code => {
  return {
    type: actionTypes.APPLY_COUPON,
    payload: { code },
  };
};

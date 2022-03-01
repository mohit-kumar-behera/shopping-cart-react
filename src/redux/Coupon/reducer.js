import * as actionTypes from './action-type';

import coupon_codes from '../../data/coupon_code';

const INITIAL_STATE = {
  coupons: [],
  appliedCoupon: null,
};

const couponReducer = (state = INITIAL_STATE, action = null) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_COUPON:
      return {
        ...state,
        coupons: [...coupon_codes],
      };
    case actionTypes.APPLY_COUPON:
      return {
        ...state,
        appliedCoupon: coupon_codes.find(coupon =>
          coupon.code === action.payload.code ? coupon : null
        ),
      };
    case actionTypes.REMOVE_COUPON:
      return {
        ...state,
        appliedCoupon: null,
      };
    default:
      return state;
  }
};

export default couponReducer;

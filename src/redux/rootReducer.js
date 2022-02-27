import { combineReducers } from 'redux';

import productReducer from './Product/reducer';
import cartReducer from './Cart/reducer';
import couponReducer from './Coupon/reducer';

const rootReducers = combineReducers({
  product: productReducer,
  cart: cartReducer,
  coupon: couponReducer,
});

export default rootReducers;

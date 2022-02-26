import { combineReducers } from 'redux';

import productReducer from './Product/reducer';
import cartReducer from './Cart/reducer';

const rootReducers = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

export default rootReducers;

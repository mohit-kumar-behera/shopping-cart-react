import { combineReducers } from 'redux';

import productReducer from './Product/reducer';

const rootReducers = combineReducers({
  product: productReducer,
});

export default rootReducers;

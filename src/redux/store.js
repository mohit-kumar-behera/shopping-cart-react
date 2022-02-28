import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './rootReducer';

import { saveToLocalStorage, fetchFromLocalStorage } from '../utils/storage';

const store = createStore(
  reducers,
  fetchFromLocalStorage(),
  composeWithDevTools()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

/* eslint-disable global-require */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { logger } from 'redux-logger';
import rootReducer from './rootReducer';

let middleware = getDefaultMiddleware();

if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware/* , logger */];
}

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

// Use HMR in development
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;

/* eslint-enable global-require */
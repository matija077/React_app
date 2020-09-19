import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

var middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

var store = createStore(rootReducer,
    applyMiddleware(...middlewares));

var persistor = persistStore(store);

export default {store, persistor};

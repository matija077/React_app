import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import { fetchCollectionStart } from './shop/shop.saga'

var sagaMiddleware = createSagaMiddleware();

var middlewares = [
    sagaMiddleware
];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

var store = createStore(rootReducer,
    applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionStart);

var persistor = persistStore(store);

export default {store, persistor};

import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

var middlewares = [logger];

var store = createStore(rootReducer,
    applyMiddleware(...middlewares));

export default store;

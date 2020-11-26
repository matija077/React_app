import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RouteApp from './RouteApp';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import combineObject from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
const { store, persistor } = combineObject;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <RouteApp />
        </PersistGate>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


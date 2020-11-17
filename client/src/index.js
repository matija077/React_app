import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import combineObject from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import CartProvider from './providers/cart/cart.provider';
const { store, persistor } = combineObject;

ReactDOM.render(
  <Provider store={store}>
    <CartProvider>
      <React.StrictMode>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </React.StrictMode>
    </CartProvider>
  </Provider>,
  document.getElementById('root')
);


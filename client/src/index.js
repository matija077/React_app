import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import combineObject from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient, gql } from 'apollo-boost';

const { store, persistor } = combineObject;


var httpLink = createHttpLink({
  uri: `https://crwn-clothing.com/`
});

var cache = new InMemoryCache();

var client = new ApolloClient({
  link: httpLink,
  cache: cache
});

client.query({
  query: gql`
    {
      getCollectionsByTitle(title: "hats") {
        id
        title
        items {
          id
          name
          imageUrl
          price

        }
      }
    }
  `
}).then(res => { console.log(res) });

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);


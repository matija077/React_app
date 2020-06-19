import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './pages/homepage/homepage.scss';
import './App.css';

import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';

function App() {
  return (
    <div>
      <Switch>
        <Route component={HomePage} path='/' exact></Route>
        <Route component={Shop} path='/shop'></Route>
      </Switch>
    </div>
  );
}

export default App;

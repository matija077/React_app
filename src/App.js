import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './pages/homepage/homepage.scss';
import './App.css';

import Header from './components/header/header.component';
import SingInAndSingUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route component={HomePage} path='/' exact></Route>
        <Route component={Shop} path='/shop'></Route>
        <Route component={SingInAndSingUpPage} path='/signin'></Route>
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import HomePage from './pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';
import './pages/homepage/homepage.scss';
import './App.css';

function HatsPage() {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route component={HomePage} path='/' exact></Route>
        <Route component={HatsPage} path='/hats' ></Route>
      </Switch>
    </div>
  );
}

export default App;

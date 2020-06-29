import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './pages/homepage/homepage.scss';
import './App.css';

import Header from './components/header/header.component';
import SingInAndSingUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser : null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
          currentUser: user,
        }, console.log(user));
    });

    console.log(this);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    var currentUser = this.state.currentUser;

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
}

export default App;

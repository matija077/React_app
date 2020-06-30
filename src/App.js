import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './pages/homepage/homepage.scss';
import './App.css';

import Header from './components/header/header.component';
import SingInAndSingUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser : null,
    }

    this.updateUser = this.updateUser.bind(this);
  }

  unsubscribeFromAuth = null;

  updateUser(userId, userData) {
    var currentUser = null;

    if (userId) {
      currentUser = {
        id: userId,
        ...userData,
      };
    }

    this.setState({
      currentUser: currentUser,
    }, (() => console.log(this.state)));
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      createUser.bind(this));

    function createUser(userAuth) {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        userRef.then(function(resolve) {
          resolve.onSnapshot(snapShot => {
            this.updateUser(snapShot.id, snapShot.data());
          });
        }.bind(this), function(reject) {
          console.log(reject);
        });
      } else {
          this.updateUser(null);
      }
    }
}

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    var currentUser = this.state.currentUser;

    return (
      <div>
        <Header user={currentUser}></Header>
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

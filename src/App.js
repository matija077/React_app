import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './pages/homepage/homepage.scss';
import './App.css';

import Header from './components/header/header.component';
import SingInAndSingUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';

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
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      createUser.bind(this));

    function createUser(userAuth) {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        userRef.then(function(resolve) {
          resolve.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          });
        }.bind(this), function(reject) {
          console.log(reject);
        });
      } else {
          setCurrentUser(userAuth);
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
        <Header></Header>
        <Switch>
          <Route component={HomePage} path='/' exact></Route>
          <Route component={Shop} path='/shop'></Route>
          <Route
            render={() =>
              this.props.currentUser ?
                (<Redirect to='/' />)
              :
                (<SingInAndSingUpPage />)}
            path={['/signin', '/singup']}
            exact
          ></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

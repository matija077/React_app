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
import CheckoutPage from './pages/checkout/checkout';

import {selectCurrentUser} from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { selectCollectionForPreview } from './redux/shop/shop.selectors';

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
    const { setCurrentUser, collectionsArray, checkUserSession } = this.props;

    checkUserSession();
    /*this.unsubscribeFromAuth = auth.onAuthStateChanged(
      createUser.bind(this));

    function createUser(userAuth) {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        userRef.then(function(resolve) {
          resolve.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.i d,
              ...snapShot.data(),
            })
          });
        }.bind(this), function(reject) {
          console.log(reject);
        });
      } else {
          setCurrentUser(userAuth);
      }
    }*/

    /*addCollectionsAndDocuments('collections',
      collectionsArray.map(({title, items}) => ({ title, items }))
    ).then((result) => console.log(result))
      .catch((result) => console.log(result))*/
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
          <Route component={CheckoutPage} path='/checkout' exact></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionForPreview,
});

function mapDispatchToProps(dispatch) {
  return {
    checkUserSession: () => dispatch(checkUserSession())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// https://github.com/zhangmyihua/lesson-26-complete
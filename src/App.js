import React, { useEffect } from 'react';
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

function App({checkUserSession, currentUser}) {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header></Header>
      <Switch>
        <Route component={HomePage} path='/' exact></Route>
        <Route component={Shop} path='/shop'></Route>
        <Route
          render={() =>
            currentUser ?
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
import React from 'react';
import { all, call, takeLatest, put } from 'redux-saga/effects';

import userActionTypes from '../user/user.types';
import cartActionTypes from '../cart/cart.types';
//import { clearCart } from './cart.actions';
import CartProvider from '../../providers/cart/cart.provider';

function* clearCartFunction() {
    try {
        yield 1;
        //yield put(clearCart());
    } catch(error) {
        console.log("errro clearing cart function");
    }
}

function* onSignOutSuccess() {
    yield takeLatest(
        userActionTypes.SIGN_OUT_SUCCESS,
        clearCartFunction
    )
}

export default function* cartSaga() {
    yield all([
        call(onSignOutSuccess)
    ]);
}
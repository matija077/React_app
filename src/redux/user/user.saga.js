import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionTypes from './user.types';

import {
    signInSuccess,
    signInFailure,
} from './user.actions';

import {
    googleProvider,
    auth,
    createUserProfileDocument
} from '../../firebase/firebase.utils';

function* SignInWithUser(user) {
    try {
        const userRef = yield call(createUserProfileDocument, user);
        const snapshot = yield userRef.get();
        yield put(signInSuccess({
            id: snapshot.id,
            ...snapshot.data
        }))
    } catch(error) {
        yield put(signInFailure(error));
    }
}

function* signInWithGoogle() {
    try {
        const {user } = yield auth.signInWithPopup(googleProvider);

        yield SignInWithUser(user);
    } catch(error) {
        yield put(signInFailure(error));
    }
}

function* signInWithEmail({payload: {email, password}}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);

        yield SignInWithUser(user);
    } catch(error) {
        put(signInFailure(error));
    }
}

function* onGoogleSignInStart() {
    yield takeLatest(
        userActionTypes.GOOGLE_SIGN_IN_START,
        signInWithGoogle
    );
}

function* onEmailSignInStart() {
    console.log("sta je prije");
    yield takeLatest(
        userActionTypes.EMAIL_SIGN_IN_START,
        signInWithEmail
    );
    console.log("sta je prije2");
}

export default function* userSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart)
    ])
}
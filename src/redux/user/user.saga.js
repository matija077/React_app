import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionTypes from './user.types';

import { googleSignInSuccess, googleSignInFailure } from './user.actions';

import {
    googleProvider,
    auth,
    createUserProfileDocument
} from '../../firebase/firebase.utils';

function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const snapshot = yield userRef.get();
        yield put(googleSignInSuccess({
            id: snapshot.id,
            ...snapshot.data
        }))

    } catch(error) {
        yield put(googleSignInFailure(error));
    }
}

function* onGoogleSignInStart() {
    yield takeLatest(
        userActionTypes.GOOGLE_SIGN_IN_START,
        signInWithGoogle
    );
}

export default function* userSaga() {
    yield all([
        call(onGoogleSignInStart)
    ])
}
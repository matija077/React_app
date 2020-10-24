import { takeLatest, put, all, call, takeLeading } from 'redux-saga/effects';

import userActionTypes from './user.types';

import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpFailure,
    signUpSuccess
} from './user.actions';

import {
    googleProvider,
    auth,
    createUserProfileDocument,
    getCurrentUser
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

function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();

        if (userAuth) {
            yield SignInWithUser(userAuth);
        }
    } catch(error) {
        yield put(signInFailure(error));
    }
}

function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(error) {
        yield put(signInFailure(error));
    }
}

function* signUp({email, password, displayName}) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email, password);

        yield createUserProfileDocument(user, {displayName, email});

        yield put(signUpSuccess());
    } catch(error) {
        yield put(signUpFailure(error));
    }
}

function* onGoogleSignInStart() {
    yield takeLatest(
        userActionTypes.GOOGLE_SIGN_IN_START,
        signInWithGoogle
    );
}

function* onEmailSignInStart() {
    yield takeLatest(
        userActionTypes.EMAIL_SIGN_IN_START,
        signInWithEmail
    );
}

function* onCheckUserSession() {
    yield takeLatest(
        userActionTypes.CHECK_USER_SESSION,
        isUserAuthenticated
    );
}

function* onSignOutStart() {
    yield takeLatest(
        userActionTypes.SIGN_OUT_START,
        signOut
    );
}

function* onSignUpStart() {
    yield takeLeading(
      userActionTypes.SIGN_UP_START,
      signUp
    );
}

export default function* userSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart)
    ])
}
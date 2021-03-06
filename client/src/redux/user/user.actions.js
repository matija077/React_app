import userActionTypes from './user.types';

export function googleSignInStart() {
    return {
        type: userActionTypes.GOOGLE_SIGN_IN_START
    }
};

export function emailSignInStart(emailAndPassword) {
    return {
        type: userActionTypes.EMAIL_SIGN_IN_START,
        payload: emailAndPassword,
    }
};

export function signInSuccess(user) {
    return {
        type: userActionTypes.SIGN_IN_SUCCESS,
        payload: user
    }
};

export function signInFailure(error) {
    return {
        type: userActionTypes.SIGN_IN_FAILURE,
        payload: error
    }
};

export function checkUserSession() {
    return {
        type: userActionTypes.CHECK_USER_SESSION,
    }
};

export function signOutStart() {
    return {
        type: userActionTypes.SIGN_OUT_START,
    }
};

export function signOutFailure(error) {
    return {
        type: userActionTypes.SIGN_IN_FAILURE,
        payload: error
    }
};

export function signOutSuccess() {
    return {
        type: userActionTypes.SIGN_OUT_SUCCESS,
    }
};

export function signUpStart(userCredentials) {
    return {
        type: userActionTypes.SIGN_UP_START,
        payload: userCredentials
    }
};

export function signUpFailure(error) {
    return {
        type: userActionTypes.SIGN_UP_FAILURE,
        payload: error
    }
};

export function signUpSuccess({user, additionalData}) {
    return {
        type: userActionTypes.SIGN_UP_SUCCESS,
        payload: {user, additionalData}
    }
};
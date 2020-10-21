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
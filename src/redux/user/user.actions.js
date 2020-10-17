import userActionTypes from './user.types';

export function setCurrentUser(user) {
    return {
        type: userActionTypes.SET_CURRENT_USER,
        payload: user,
    };
};

export function googleSignInStart() {
    return {
        type: userActionTypes.GOOGLE_SIGN_IN_START
    }
};

export function googleSignInSuccess(user) {
    return {
        type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
        payload: user
    }
};

export function googleSignInFailure(error) {
    return {
        type: userActionTypes.GOOGLE_SIGN_IN_FAILURE,
        payload: error
    }
};

export function emailSignInStart(emailAndPassword) {
    return {
        type: userActionTypes.EMAIL_SIGN_IN_START,
        payload: emailAndPassword,
    }
};

export function emailSignInSuccess(user) {
    return {
        type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
        payload: user
    }
};

export function emailSignInFailure(error) {
    return {
        type: userActionTypes.EMAIL_SIGN_IN_FAILURE,
        payload: error
    }
};
import userActionTypes from './user.types';

var INITIAL_STATE = {
    currentUser: null,
    error: null,
};

function userReducer(currentState = INITIAL_STATE, action) {
    switch(action.type) {
        case userActionTypes.SIGN_IN_SUCCESS: {
            return {
                ...currentState,
                currentUser: action.payload,
                error: null,
            };
        }
        case userActionTypes.SIGN_IN_FAILURE: {
            return {
                ...currentState,
                error: action.payload,
            };
        }
        default: {
            return currentState;
        }
    };
}

export default userReducer;
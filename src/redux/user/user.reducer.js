import {userActionTypes} from './user.types';

var INITIAL_STATE = {
    currentUser: null,
};

function userReducer(currentState = INITIAL_STATE, action) {
    switch(action.type) {
        case userActionTypes.SET_CURRENT_USER: {
            return {
                ...currentState,
                currentUser: action.payload,
            };
        }
        default: {
            return currentState;
        }
    };
}

export default userReducer;
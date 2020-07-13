import {cartActionTypes} from './cart.types';

var INITIAL_STATE = {
    hidden: true,
};

function cartReducer(currentState = INITIAL_STATE, action) {
    switch(action.type) {
        case cartActionTypes.TOGGLE_HIDE_CART: {
            return {
                ...currentState,
                hidden: !currentState.hidden,
            };
        }
        default: {
            return currentState;
        }
    };
}

export default cartReducer;
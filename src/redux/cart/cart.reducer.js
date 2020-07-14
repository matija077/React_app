import {cartActionTypes} from './cart.types';

var INITIAL_STATE = {
    hidden: true,
    cartItems: [],
};

function cartReducer(currentState = INITIAL_STATE, action) {
    switch(action.type) {
        case cartActionTypes.TOGGLE_HIDE_CART: {
            return {
                ...currentState,
                hidden: !currentState.hidden,
            };
        }
        case cartActionTypes.ADD_CART_ITEM: {
            return {
                ...currentState,
                cartItems: [...currentState.cartItems, action.payload],
            };
        }
        case cartActionTypes.REMOVE_CARD_ITEM: {
            let cartItemsRemoved = currentState.cartItems.splice(
                currentState.cartItems.indexOf(action.payload)
            );

            return {
                ...currentState,
                cartItems: [...cartItemsRemoved],
            };
        }
        default: {
            return currentState;
        }
    };
}

export default cartReducer;
import {cartActionTypes} from './cart.types';
import {addItemToCart, removeOneItemFromCart} from './cart.utils';
;
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
                cartItems: addItemToCart(
                    currentState.cartItems, action.payload)
            };
        }
        case cartActionTypes.REMOVE_CARD_ITEM: {
            return {
                ...currentState,
                cartItems: currentState.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            };
        }
        case cartActionTypes.REMOVE_ONE_CARD_ITEM: {
            return {
                ...currentState,
                cartItems: removeOneItemFromCart(
                    currentState.cartItems,
                    action.payload
                )
            };
        }
        default: {
            return currentState;
        }
    };
}

export default cartReducer;
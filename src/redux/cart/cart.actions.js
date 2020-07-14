import {cartActionTypes} from './cart.types';

export  function toggleCartHidden(hidden) {
    return {
        type: cartActionTypes.TOGGLE_HIDE_CART,
    };
};

export function addCartItem(item) {
    return {
        type: cartActionTypes.ADD_CART_ITEM,
        payload: item,
    };
}

export function removeCartItem(item) {
    return {
        type: cartActionTypes.REMOVE_CARD_ITEM,
        payload: item,
    };
}
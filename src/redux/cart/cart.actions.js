import {cartActionTypes} from './cart.types';

export default function toggleCartHidden(hidden) {
    return {
        type: cartActionTypes.TOGGLE_HIDE_CART,
    };
};
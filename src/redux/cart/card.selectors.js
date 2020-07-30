import {createSelector} from 'reselect';

/**
 * inptu selector
 */
function selectCart(state) {
    return state.cart;
}

export var selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export var selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity
        ,  0
    )
);

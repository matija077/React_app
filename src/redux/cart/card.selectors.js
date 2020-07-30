import {createSelector} from 'reselect';

/**
 * inptu selector
 */
function selectCart(state) {
    return state.cart;
}

export var selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export var selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export var selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        reducer(quantity)
        ,  0
    )
);

export var selectCartTotal = createSelector(
    [selectCartItems],
     /*cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.prize
        , 0
     )*/
     cartItems => cartItems.reduce(
         reducer(pricePerQuantity)
         , 0
     )
);

function reducer(calculation) {
    return function(accumulatedQuantity, cartItem) {
        return accumulatedQuantity + calculation(cartItem);
    }
}

function pricePerQuantity(cartItem) {
    return cartItem.quantity * cartItem.price;
}

function quantity(cartItem) {
    return cartItem.quantity;
}

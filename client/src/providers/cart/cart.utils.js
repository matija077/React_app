export function addItemToCart(
    cartItems, cartItemToAdd) {
        const existingCartItem = cartItems.find(
            cartItem => cartItem.id === cartItemToAdd.id
        );

        if (existingCartItem) {
            return cartItems.map(cartItem =>
                cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
            );
        }

        return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export function removeOneItemFromCart(cartItems ,cartItemToRemove) {
    const existingCartITemIndex = cartItems.findIndex(
        cartItem => cartItem.id === cartItemToRemove.id
    );
    const existingCartItem = cartItems[existingCartITemIndex];

    console.log(existingCartItem);
    console.log(existingCartITemIndex);
    if (existingCartItem.quantity === 1) {
        cartItems = cartItems.filter(
            cartItem => cartItem.id !== cartItemToRemove.id
        )
    } else {
        cartItems = cartItems.map(
            cartItem => cartItem.id === cartItemToRemove.id ?
                {...cartItem, quantity: cartItem.quantity - 1}
            :
                cartItem
        )
    }

    console.log(cartItems);

    return cartItems;
}

export function filterItemFromCart(cartItems, item) {
    return cartItems.filter(
        cartItem => cartItem.id !== item.id
    )

}

export function getCartItemsCount(cartItems) {
    return cartItems.reduce(
        reducer(quantity)
        , 0
    );
}

function reducer(calculation){
    return function(accumulatedQuantity, item) {
        return accumulatedQuantity + calculation(item);
    }
}

function pricePerQuantity(cartItem) {
    return cartItem.quantity * cartItem.price;
}

function quantity(cartItem) {
    return cartItem.quantity;
}

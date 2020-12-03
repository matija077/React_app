function addItemToCart(
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

function removeOneItemFromCart(cartItems ,cartItemToRemove) {
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

function pricePerQuantityModifier(cartItem) {
    return cartItem.quantity * cartItem.price;
}

function quantityModifier(cartItem) {
    return cartItem.quantity;
}

function calculation(modifierFunction) {
    return function calculate(value) {
        return modifierFunction(value)
    };
}

function reducer(calculation) {
    return function(accumulator, value) {
        return accumulator + calculation(value);
    }
}

function calculateItemCount(cartItems) {
    return cartItems.reduce(reducer(
        calculation(quantityModifier)), 0)
}

export {
    addItemToCart,
    removeOneItemFromCart,
    calculateItemCount
}

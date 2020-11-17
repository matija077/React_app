import React from 'react';

import { removeOneItemFromCart, addItemToCart  } from './cart.utils';

var cartContext = {
    hidden: true,
    cartItemsCount: 0,
    cartItems: [],
    toggleHidden: () => {},
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {}
};
export var CartContext = React.createContext({cartContext});

function CartProvider({ children }) {
    var [hidden, setHidden] = React.useState(cartContext.hidden);
    var [cartItemsCount, setCartItemsCount] = React.useState(
        cartContext.cartItemsCount);
    var [cartItems, setCartItems] = React.useState(
        cartContext.cartItems);

    var toggleCartHidden = function() {
        setHidden(!hidden);
    }
    var addItem = function(item) {
        setCartItems(addItemToCart(cartItems, item));
        /*
        * for debugging
        var newItems = addItemToCart(cartItems, item);
        setCartItems(newItems);
        */
    }
    var removeItem = function() {

    }
    var clearItemFromCart = function() {

    }

    return (
        <CartContext.Provider
            value={{
                hidden,
                cartItemsCount,
                cartItems,
                toggleCartHidden,
                addItem
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
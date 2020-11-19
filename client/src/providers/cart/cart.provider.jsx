import React from 'react';
//import { clearCart } from '../../redux/cart/cart.actions';

import {
    removeOneItemFromCart,
    addItemToCart,
    filterItemFromCart,
    getCartItemsCount
} from './cart.utils';

var cartContext = {
    hidden: true,
    cartItemsCount: 0,
    cartItems: [],
    toggleHidden: () => {},
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    clearCart: () => {}
};
var CartContext = React.createContext({cartContext});

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
    var removeItem = function(item) {
        setCartItems(removeOneItemFromCart(cartItems, item));
    }
    var clearItemFromCart = function(item) {
        setCartItems(filterItemFromCart(cartItems, item));
    }
    var clearCart = function(){
        console.log("radim");
        setCartItems([]);
    }

    React.useEffect(
        () => {
          setCartItemsCount(getCartItemsCount(cartItems));
        }
        , [cartItems]
    );

    return (
        <CartContext.Provider
            value={{
                hidden,
                cartItemsCount,
                cartItems,
                toggleCartHidden,
                addItem,
                removeItem,
                clearItemFromCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export { CartContext };
export default CartProvider;
import { createContext } from 'react';

var CartContext = createContext({
    hidden: true,
    toggleHidden: () => {}
});

export default CartContext;
import React from 'react';

import SubmitComponent from '../SubmitButton/SubmitButton.component';

import './cart.style.scss';

function Cart() {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
            </div>
            <SubmitComponent>GO TO CHECKOUT</SubmitComponent>
        </div>
    );
}

export default Cart;
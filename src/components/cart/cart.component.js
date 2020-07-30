import React from 'react';
import { connect } from 'react-redux';

import {selectCartItems} from '../../redux/cart/card.selectors';

import SubmitComponent from '../SubmitButton/SubmitButton.component';
import CartItem from '../cart-item/cartItem.component';

import './cart.style.scss';

function Cart({ cartItems }) {
    console.log(cartItems);
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem =>
                        <CartItem
                            key={cartItem.id}
                            item={cartItem}>
                        </CartItem>
                    )
                }
            </div>
            <SubmitComponent>GO TO CHECKOUT</SubmitComponent>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        cartItems: selectCartItems(state),
    };
}

export default connect(mapStateToProps)(Cart);
import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

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
                    cartItems.length ?
                        cartItems.map(cartItem =>
                            <CartItem
                                key={cartItem.id}
                                item={cartItem}>
                            </CartItem>
                        )
                    :
                        <span className="empty-message">
                            Your cart is empty
                        </span>

                }
            </div>
            <SubmitComponent>GO TO CHECKOUT</SubmitComponent>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})

export default connect(mapStateToProps)(Cart);
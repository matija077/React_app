import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import {selectCartItems} from '../../redux/cart/card.selectors';

import SubmitComponent from '../SubmitButton/SubmitButton.component';
import CartItem from '../cart-item/cartItem.component';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import './cart.style.scss';

function Cart({ cartItems, history, dispatch }) {
    console.log(cartItems);
    return(
        <div className="cart-dropdown">
            <div className="cart-clear-items">
                &#x274C;
            </div>
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
            <SubmitComponent onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>
                GO TO CHECKOUT
            </SubmitComponent>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(Cart));
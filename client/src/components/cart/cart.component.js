import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import {selectCartItems} from '../../redux/cart/card.selectors';

import SubmitComponent from '../SubmitButton/SubmitButton.component';
import CartItem from '../cart-item/cartItem.component';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import ClearCart  from '../clear-cart/clearCart.component';

import './cart.style.scss';

function Cart({ cartItems, history, dispatch }) {
    return(
        <div className="cart-dropdown">
            <ClearCart></ClearCart>
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

export default withRouter(connect(
    mapStateToProps
)(Cart));
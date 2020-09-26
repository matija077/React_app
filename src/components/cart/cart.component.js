import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import {selectCartItems} from '../../redux/cart/card.selectors';

import CartItem from '../cart-item/cartItem.component';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

// import './cart.style.scss';

import {
    CartDropdownButton,
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageContainer
} from './cart.styles';

function Cart({ cartItems, history, dispatch }) {
    console.log(cartItems);
    return(
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                        cartItems.map(cartItem =>
                            <CartItem
                                key={cartItem.id}
                                item={cartItem}>
                            </CartItem>
                        )
                    :
                        <EmptyMessageContainer>
                            Your cart is empty
                        </EmptyMessageContainer>

                }
            </CartItemsContainer>
            <CartDropdownButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>
                GO TO CHECKOUT
            </CartDropdownButton>
        </CartDropdownContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(Cart));
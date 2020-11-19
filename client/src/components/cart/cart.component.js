import React from 'react';

import {withRouter} from 'react-router-dom';

import {selectCartItems} from '../../redux/cart/card.selectors';

import SubmitComponent from '../SubmitButton/SubmitButton.component';
import CartItem from '../cart-item/cartItem.component';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import ClearCart  from '../clear-cart/clearCart.component';
import { CartContext } from '../../providers/cart/cart.provider';

import './cart.style.scss';

function Cart({ history, dispatch }) {
    var { cartItems, toggleCartHidden } = React.useContext(CartContext);

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
                toggleCartHidden();
            }}>
                GO TO CHECKOUT
            </SubmitComponent>
        </div>
    );
}

export default withRouter(Cart);
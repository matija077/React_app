import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
//test
import  CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe_button.component';
import ClearCart  from '../../components/clear-cart/clearCart.component';

import  {selectCartItems, selectCartTotal} from '../../redux/cart/card.selectors'

import { CartContext } from '../../providers/cart/cart.provider';

import './checkout.scss';

function CheckoutPage({total}) {
    var { cartItems } = React.useContext(CartContext);

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
                <ClearCart className={"header-block"}></ClearCart>
            </div>
            <div>
                {
                    cartItems.map((cartItem) => {
                            return <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
                    })
                }
            </div>
            <div className="total">
             <span>TOTAL: ${total}</span>
            </div>
            <div className="test-warning">
                *Please use following for test apyment*
                <br />
                4242 4242 4242 4242  - Exp: 01/21 - cvv: 123
            </div>
            <StripeCheckoutButton price={total}></StripeCheckoutButton>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
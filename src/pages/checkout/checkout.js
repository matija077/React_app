import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import  {selectCartItems} from '../../redux/cart/card.selectors'
import  {selectCartTotal} from '../../redux/cart/card.selectors'


import './checkout.scss';

function CheckoutPage({cartItems, total}) {
    console.log(total);
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
            </div>
            <div>
                {
                    cartItems.map((cartItem) => {
                            return cartItem.name
                    })
                }
            </div>
            <div className="total">
             <span>TOTAL: ${total}</span>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
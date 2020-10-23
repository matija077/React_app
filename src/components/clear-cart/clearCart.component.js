import React from 'react';
import { connect } from 'react-redux';

import { clearCart } from '../../redux/cart/cart.actions';

import { ClearCartItemsContainer } from './clearCart.styles';

function ClearCart({clearCart, className}) {
    return (
        <div className={className}>
            <ClearCartItemsContainer onClick={clearCart}>
                &#x274C;
            </ClearCartItemsContainer>
        </div>
    );
}

const mapDispatchToProps = {
    clearCart
};

export default connect(
    null,
    mapDispatchToProps
)(ClearCart);
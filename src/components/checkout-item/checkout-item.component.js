import React from 'react';
import {connect} from 'react-redux'

import './checkout-item.style.scss';

import {removeCartItem} from '../../redux/cart/cart.actions'

function CheckoutItem(
    {
        cartItem,
        clearItem
    }) {
        const {name, imageUrl, price, quantity} = cartItem;
        console.log(clearItem);
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt='item'>
                </img>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div
                className="remove-button"
                onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
     clearItem: item => dispatch(removeCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
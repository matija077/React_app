import React from 'react';
import {connect} from 'react-redux'

import { CartContext } from '../../providers/cart/cart.provider';

import './checkout-item.style.scss';

import {removeCartItem, addCartItem, removeOneCartItem} from '../../redux/cart/cart.actions'

function CheckoutItem(
    {
        cartItem,
    }) {
        const {name, imageUrl, price, quantity} = cartItem;
        var {
            removeItem: removeOneItem,
            addItem: addOneItem,
            clearItemFromCart: clearItem
        } = React.useContext(CartContext);

        console.log(clearItem);

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt='item'>
                </img>
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <div className="arrow" onClick={ () => removeOneItem(cartItem) }>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={ () => addOneItem(cartItem) }>&#10095;</div>
            </div>
            <span className="price">{price}</span>
            <div
                className="remove-button"
                onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
     clearItem: item => dispatch(removeCartItem(item)),
     addOneItem: item => dispatch(addCartItem(item)),
     removeOneItem: item => dispatch(removeOneCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
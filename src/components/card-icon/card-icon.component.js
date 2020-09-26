import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/card.selectors';

//import './card-icon.styles.scss';
import {CartContainer, ItemCount, ShoppingIcon} from './card-icon.styles';

function CartIcon({toggleCartHidden, itemCount}) {
    return(
        <CartContainer onClick={toggleCartHidden}>
            <ShoppingIcon></ShoppingIcon>
            <ItemCount>{itemCount}</ItemCount>
        </CartContainer>

    );
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
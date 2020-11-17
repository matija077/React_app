import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/card.selectors';

import  {ReactComponent as ShoppingIcon} from '../../assets/11.2 shopping-bag.svg.svg';

import './card-icon.styles.scss';

import { CartContext } from '../../providers/cart/cart.provider';

function CartIcon({ itemCount}) {
    var {toggleCartHidden} = React.useContext(CartContext);

    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"></ShoppingIcon>
            <span className="item-count">{itemCount}</span>
        </div>

    );
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
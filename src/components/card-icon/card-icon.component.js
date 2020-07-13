import React from 'react';

import  {ReactComponent as ShoppingIcon} from '../../assets/11.2 shopping-bag.svg.svg';

import './card-icon.styles.scss';

function CartIcon() {
    return(
        <div className="cart-icon">
            <ShoppingIcon className="shopping-icon"></ShoppingIcon>
            <span className="item-count">0</span>
        </div>

    );
}

export default CartIcon;
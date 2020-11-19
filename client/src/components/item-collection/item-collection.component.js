import React from 'react';

import {addCartItem} from '../../redux/cart/cart.actions';
import SubmitComponent from '../SubmitButton/SubmitButton.component';

import { CartContext } from '../../providers/cart/cart.provider';

import './item-collection.style.scss';

function ItemCollection({item, ...rest}) {
    const {name, price, imageUrl } = item;
    var { addItem } = React.useContext(CartContext);

    return(
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                 }}
            >
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <SubmitComponent
                inverted
                 onClick={() => addItem(item)}
            >
                ADD TO CART
            </SubmitComponent>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: (item) => dispatch(addCartItem(item)),
    };
}

export default ItemCollection;
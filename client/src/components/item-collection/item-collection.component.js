import React from 'react';
import {connect} from 'react-redux';

import {addCartItem} from '../../redux/cart/cart.actions';
import SubmitComponent from '../SubmitButton/SubmitButton.component';

import './item-collection.style.scss';

function ItemCollection({item, addItem, ...rest}) {
    const {name, price, imageUrl } = item;

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

export default connect(null, mapDispatchToProps)(ItemCollection);
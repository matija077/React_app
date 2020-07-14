import React from 'react';

import SubmitComponent from '../SubmitButton/SubmitButton.component';

import './item-collection.style.scss';

function ItemCollection({id, name, price, imageUrl, ...rest}) {
    console.log(id);

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
            <SubmitComponent inverted>ADD TO CART</SubmitComponent>
        </div>
    );
}

export default ItemCollection;
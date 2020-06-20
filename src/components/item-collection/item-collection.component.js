import React from 'react';

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
        </div>
    );
}

export default ItemCollection;
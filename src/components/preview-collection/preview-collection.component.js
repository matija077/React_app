import React from 'react';

import './preview-collection.style.scss';

import ItemCollection from '../item-collection/item-collection.component';

function PreviewCollection({ title, items, ...rest }) {
    var filterItemsValue = 4;

    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {
                items
                    .filter((item, index) => index < filterItemsValue)
                    .map(({id, ...otherItemProps}) => (
                        <ItemCollection key={id} {...otherItemProps}></ItemCollection>
                    )
                )
            }
            </div>
        </div>
    );
}

export default PreviewCollection;
import React from 'react';

import './preview-collection.style.scss';

import ItemCollection from '../item-collection/item-collection.component';

function PreviewCollection({ title, items, ...rest }) {
    var filterItemsThreshold = 4;

    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {
                items
                    .filter((item, index) => index < filterItemsThreshold)
                    .map((item) => (
                        <ItemCollection key={item.id} item={item}></ItemCollection>
                    )
                )
            }
            </div>
        </div>
    );
}

export default PreviewCollection;
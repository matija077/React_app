import React from 'react';

import SHOP_DATA from './collections';
import PreviewCollection from '../../components/preview-collection/preview-collection.component.js';

class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
        };
    }

    render() {
        const collections = this.state.collections;

        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <PreviewCollection key={id} {...otherCollectionProps}>

                        </PreviewCollection>
                    ))
                }
            </div>
        );
    }
}

/**
{id, ...otherCollectionProps}
 <PreviewCollection key={id} {...otherCollectionProps}>

                        </PreviewCollection> */

export default Shop;
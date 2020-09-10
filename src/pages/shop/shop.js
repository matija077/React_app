import React from 'react';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

function Shop({collections}) {

    return (
        <div className="shop-page">
            <CollectionsOverview></CollectionsOverview>
        </div>
    );
}

/**
{id, ...otherCollectionProps}
 <PreviewCollection key={id} {...otherCollectionProps}>

                        </PreviewCollection> */

export default Shop;
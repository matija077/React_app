import React from 'react';
import { connect } from 'react-redux';
import  {createStructuredSelector} from 'reselect';

import PreviewCollection from '../../components/preview-collection/preview-collection.component.js';

import { selectCollections } from '../../redux/shop/shop.selectors';

import './collection-overview.styles.scss';

function CollectionsOverview({collections}) {

    return (
        <div className="collections-overview">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps}>

                    </PreviewCollection>
                ))
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionsPageContainer from '../collection/collection.container';

import { fetchCollectionStart } from '../../redux/shop/shop.actions';

function Shop({fetchCollectionStart, match}) {
    useEffect(() => {
        fetchCollectionStart();
    }, [fetchCollectionStart]);

    console.log("sta radimoo");

    return(
        <div className="shop-page">
            <Route
                exact path={`${match.path}`}
                component={CollectionsOverviewContainer}
            >
            </Route>
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionsPageContainer}
            >
            </Route>
        </div>
    );
}

/**
{id, ...otherCollectionProps}
 <PreviewCollection key={id} {...otherCollectionProps}>

                        </PreviewCollection> */

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProps)(Shop);
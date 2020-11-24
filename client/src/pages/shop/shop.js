import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

//import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.containerGraph';
//import CollectionsPageContainer from '../collection/collection.container';
import CollectionsPageContainer from '../collection/collection.graphQL.container';

import { fetchCollectionStart } from '../../redux/shop/shop.actions';

function Shop({fetchCollectionStart, match, history, location}) {
    useEffect(() => {
        fetchCollectionStart();
    }, [fetchCollectionStart]);

    console.log(history);
    console.log(match);
    console.log(location);

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
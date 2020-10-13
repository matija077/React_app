import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionsPageContainer from '../collection/collection.container';

import { fetchCollectionStart } from '../../redux/shop/shop.actions';

class Shop extends React.Component {
    constructor() {
        super();

    };

    state = {
        loading: true
    };

    unsubscribeFromSnapshot;

    componentDidMount() {
        const { fetchCollectionStartAsync } = this.props;

        fetchCollectionStart();
    }

    render() {
        const { match } = this.props;

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
}

/**
{id, ...otherCollectionProps}
 <PreviewCollection key={id} {...otherCollectionProps}>

                        </PreviewCollection> */

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProps)(Shop);
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection';

import SpinnerWrapper from '../../components/spinner/spinnerWrapper.component';

import {fetchCollectionStartAsync} from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner = SpinnerWrapper(CollectionsOverview);
const CollectionsPageWithSpinner = SpinnerWrapper(CollectionPage);

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

        fetchCollectionStartAsync();
    }

    render() {
        const { match, isCollectionFetching } = this.props;

        return(
            <div className="shop-page">
                <Route
                    exact path={`${match.path}`}
                    render={props =>
                        (<CollectionsOverviewWithSpinner
                            isLoading={ isCollectionFetching }
                            {...props}
                        />)
                    }
                >
                </Route>
                <Route
                    path={`${match.path}/:collectionId`}
                    render={ props => (
                        <CollectionsPageWithSpinner
                            isLoading={ isCollectionFetching }
                            {...props}
                        >
                        </CollectionsPageWithSpinner>
                    )}
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

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
});


const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
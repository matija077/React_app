import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection';

import SpinnerWrapper from '../../components/spinner/spinnerWrapper.component';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import {updateCollection} from '../../redux/shop/shop.actions';

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
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(
            async function snapshotChanged(snapshot) {
                const collectionsMap = convertCollectionSnapshotToMap(snapshot);
                updateCollections(collectionsMap);
                this.setState({loading: false});
            }.bind(this)
        );
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;

        return(
            <div className="shop-page">
                <Route
                    exact path={`${match.path}`}
                    render={props =>
                        (<CollectionsOverviewWithSpinner
                            isLoading={loading}
                            {...props}
                        />)
                    }
                >
                </Route>
                <Route
                    path={`${match.path}/:collectionId`}
                    render={ props => (
                        <CollectionsPageWithSpinner
                            isLoading={ loading }
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

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap =>
        dispatch(updateCollection(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);
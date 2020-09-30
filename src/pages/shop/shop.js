import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import {updateCollection} from '../../redux/shop/shop.actions';
class Shop extends React.Component {
    constructor() {
        super();



    };

    unsubscribeFromSnapshot;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(
            async function snapshotChanged(snapshot) {
                const collectionsMap = convertCollectionSnapshotToMap(snapshot);
                updateCollections(collectionsMap);
            }
        );
    }

    render() {
        const { match } = this.props;

        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
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
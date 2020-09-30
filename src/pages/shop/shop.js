import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
class Shop extends React.Component {
    constructor() {
        super();



    };

    unsubscribeFromSnapshot;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(
            async function snapshotChanged(snapshot) {
                const collectionsMap = convertCollectionSnapshotToMap(snapshot);
                console.log(collectionsMap);
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

export default Shop;
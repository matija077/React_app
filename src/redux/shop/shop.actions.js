import ShopActionTypes from './shop.types';

import { firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';

export function fetchCollectionStart(collectionsMap) {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_START,
    };
}

export function fetchCollectionSuccess(collectionsMap) {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap,
    };
}

export function fetchCollectionFailure(errorMessage) {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: errorMessage,
    };
}

/**
 * as fetch start we dispatch start using thunk to know that async is in progress
 * when we get the data we disaptch using thunk a success call to change state
 */
export function fetchCollectionStartAsync() {
    function getDispatch(dispatch) {
        const collectionRef = firestore.collection('collections');

        dispatch(fetchCollectionStart());

        collectionRef.get().then(
            async function snapshotChanged(snapshot) {
                const collectionsMap = convertCollectionSnapshotToMap(snapshot);

                dispatch(fetchCollectionSuccess(collectionsMap));
            }
        ).catch(
            function onSnapshotChangedError(error) {
                dispatch(fetchCollectionFailure(error.message));
            }
        );
    }

    return getDispatch;
}
import {  call, put, takeLatest } from 'redux-saga/effects';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

import {
     fetchCollectionSuccess,
     fetchCollectionFailure
} from './shop.actions.js';

import ShopActionTypes from './shop.types';

export function* fetchCollectionAsync() {
    console.log("weoking");
    try {
        const collectionRef = firestore.collection('collections');

        const snapshot = yield collectionRef.get();

        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);

        yield put(fetchCollectionSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionFailure(error.message));
    }

   /* collectionRef.get().then(
        async function snapshotChanged(snapshot) {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);

            dispatch(fetchCollectionSuccess(collectionsMap));
        }
    ).catch(
        function onSnapshotChangedError(error) {
            dispatch(fetchCollectionFailure(error.message));
        }
    );*/
}

export function* fetchCollectionStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync
    );
}
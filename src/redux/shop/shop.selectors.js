import { createSelector } from 'reselect';

function selectShop(state) {
    return state.shop;
}

export var selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export var selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(
        key => collections[key]
    )
);

export function selectCollection(collectionUrlParam) {
    return createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );
}
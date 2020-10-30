import { createSelector } from 'reselect';

function selectShop(state) {
    // console.log("selectShop -> state", state)

    return state.shop;
}

export var selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export var selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => (collections ?
        Object.keys(collections).map(
            key => collections[key])
    :
        [])
);

export function selectCollection(collectionUrlParam) {
    return createSelector(
        [selectCollections],
        collections => (collections ?
            collections[collectionUrlParam]
        :
            null)
    );
}

export var selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export var selectorIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);

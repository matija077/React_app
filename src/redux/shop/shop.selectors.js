import { createSelector } from 'reselect';

function selectShop(state) {
    return state.shop;
}

export var selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export function selectCollection(collectionUrlParam) {
    return createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );
}
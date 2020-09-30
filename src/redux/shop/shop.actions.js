import ShopActionTypes from './shop.types';

export function updateCollection(collectionsMap) {
    return {
        type: ShopActionTypes.UPDATE_COLLECTIONS,
        payload: collectionsMap
    };
}
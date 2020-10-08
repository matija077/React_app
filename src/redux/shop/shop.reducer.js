import ShopActionTypes from './shop.types';

var INITIAL_STATE = {
    collections: null
};

function shopReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS: {
            return {
                ...state,
                collections: action.payload
            };
        }
        default:
            return state;
    }
}

export default shopReducer;
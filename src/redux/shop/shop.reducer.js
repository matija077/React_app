import SHOP_DATA from './collections';
import {updateCollection} from './shop.actions';

var INITIAL_STATE = {
    collections: SHOP_DATA
};

function shopReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case action.UPDATE_COLLECTIONS: {
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
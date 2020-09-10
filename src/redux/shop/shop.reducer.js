import SHOP_DATA from './collections';

var INITIAL_STATE = {
    collections: SHOP_DATA
};

function shopReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        default:
            return state;
    }
}

export default shopReducer;
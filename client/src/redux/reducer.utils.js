export function reducerFactory(initialState, handlers) {
    return function reducer(state = initialState, action) {
        return handlers[action.type]
        ? handlers[action.type](state, action)
        : state;
    }
}
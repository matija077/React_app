import { gql } from 'apollo-boost';

import { addItemToCart } from './cart.utils.js';

var typeDefs = gql`
    extend type Mutation {
        ToggleCartHidden: Boolean!
        AddItemToCart(item: Item!): [Item]!
    }

    extend type Item {
        quantity: Int
    }
`;

const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`;

const GET_CART_ITEMS = gql`
    {
        cartItems @client
    }
`;

const ADD_ITEM_TO_CART = gql`
    mutation AddItemToCart($item: item!) {
        addItemToCart(item: $item) @client
    }
`;

const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`;

var queries ={
    GET_CART_HIDDEN,
    GET_CART_ITEMS,
};

var mutations = {
    TOGGLE_CART_HIDDEN,
    ADD_ITEM_TO_CART
}

var queriesAndMutations = {
    queries,
    mutations
};

var resolvers = {
    Mutation: {
        toggleCartHidden: (_, __, { cache }) => {
            const { cartHidden } = cache.readQuery({
                query: GET_CART_HIDDEN
            })

            console.log(cartHidden);

            cache.writeQuery({
                query: GET_CART_HIDDEN,
                data: { cartHidden: !cartHidden }
            });

            return !cartHidden;
        },

        addItemToCart: (_root, args, { cache }) => {
            const { cartItems } = cache.readQuery({
                query: GET_CART_ITEMS
            })

            console.log(args);
            const newCartItems = addItemToCart(cartItems, args.item);

            cache.writeQuery({
                query: GET_CART_ITEMS,
                data: { cartItems: newCartItems }
            });

            console.log(newCartItems);

            return newCartItems;
        }
    }
};

export {
    resolvers,
    typeDefs,
    queriesAndMutations,
    mutations,
    queries
};
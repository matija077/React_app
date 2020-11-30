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

const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`;

var queriesAndMutations = {
    queries:{
        GET_CART_HIDDEN,
        GET_CART_ITEMS,
    },
    mutations: {
        TOGGLE_CART_HIDDEN
    }
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

        addItemToCart: (_root, { item }, { cache }) => {
            const { cartItems } = cache.readQuery({
                query: GET_CART_ITEMS
            })

            const newCartItems = addItemToCart(cartItems, item);

            cache.writeQuery({
                query: GET_CART_ITEMS,
                data: { cartItems: newCartItems }
            });

            console.log(newCartItems);

            return newCartItems;
        }
    }
};

export { resolvers, typeDefs, queriesAndMutations };
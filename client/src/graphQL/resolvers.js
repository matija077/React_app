import { gql } from 'apollo-boost';

import {
    addItemToCart,
    calculateItemCount
} from './cart.utils.js';

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

const GET_ITEM_COUNT = gql`
    {
        itemCount @client
    }
`;

const GET_COLLECTIONS = gql`
     {
         collections {
             id
             title
             items{
                 id
                 name
                 price
                 imageUrl
             }
         }
     }
`;

const GET_COLLECTION_BY_TITLE = gql`
    query getCollectionsByTitle($title: String!) {
        getCollectionsByTitle(title: $title){
            id
            title
            items{
                id
                name
                price
                imageUrl
            }
        }
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
    GET_ITEM_COUNT,
    GET_COLLECTIONS,
    GET_COLLECTION_BY_TITLE
};

var mutations = {
    TOGGLE_CART_HIDDEN,
    ADD_ITEM_TO_CART
}

var queriesAndMutations = {
    queries,
    mutations,
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
                query: GET_ITEM_COUNT,
                data: { itemCount: calculateItemCount(newCartItems) }
            })

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
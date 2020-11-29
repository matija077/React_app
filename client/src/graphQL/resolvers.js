import { gql } from 'apollo-boost';

var typeDefs = gql`
    extend type Mutation {
        ToggleCartHidden: Boolean!
    }
`;

const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`;

var resolvers = {
    Mutation: {
        toggleCartHidden: (_, __, { cache }) => {
            const { cartHidden } = cache.readQuery({
                query: GET_CART_HIDDEN
            })

            console.log(_);

            cache.writeQuery({
                query: GET_CART_HIDDEN,
                data: { cartHidden: !cartHidden }
            })

            return !cartHidden;
        }
    }
};

export { resolvers, typeDefs };
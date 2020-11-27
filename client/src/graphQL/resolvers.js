import { gql } from 'apollo-boost';

var typeDefs = gql`
    extend type Mutation {
        ToggleCartHidden: Boolean!
    }
`;

var resolvers = {
    Mutation: {
        toggleCartHidden: (_root, _args, _context, _info) => {

        }
    }
}
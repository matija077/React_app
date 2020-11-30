import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Header from './header.component';

const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`;

function HeaderComponent() {

    return (
        <Query query={GET_CART_HIDDEN}>
            {
                ({error, loading, data}) => {
                    var { cartHidden } = data || {};

                   return(
                        <Header
                            hidden={cartHidden ?? true}
                        >

                        </Header>
                   );
                }
            }
        </Query>
    );
}

export default HeaderComponent;
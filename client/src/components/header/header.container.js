import React from 'react';
import { Query } from 'react-apollo';
import { queries } from '../../graphQL/resolvers';

import Header from './header.component';

function HeaderComponent() {
    const GET_CART_HIDDEN = queries.GET_CART_HIDDEN;

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
import React from 'react';
import { Mutation, Query} from 'react-apollo';
import { mutations, queries } from '../../graphQL/resolvers';

import CartIcon  from './card-icon.component';
import QueryContainer from '../../graphQL/query.container.js';
import GraphQLHooksContainer from '../../graphQL/graphQLHooks.container';

function CardIconContainer() {
    const TOGGLE_CART_HIDDEN = mutations.TOGGLE_CART_HIDDEN;
    const GET_ITEM_COUNT = queries.GET_ITEM_COUNT

    return(
        <GraphQLHooksContainer
            queryName={GET_ITEM_COUNT}
            mutationName={TOGGLE_CART_HIDDEN}
            render={
                (result) => () => {
                    console.log(result);
                    return (
                    <CartIcon
                        toggleCartHidden={result.mutationFunction}
                        itemCount={result.data.itemCount}
                    >

                    </CartIcon>
                    );
                    }
            }
        >
        </GraphQLHooksContainer>
        /*<Mutation mutation={TOGGLE_CART_HIDDEN}>
            {
                (toggleCartHidden) => {
                    console.log(toggleCartHidden);
                    console.log(CartIcon);
                    return (
                        <QueryContainer
                            render={({ itemCount }) => () => (
                                <CartIcon
                                    toggleCartHidden={toggleCartHidden}
                                    itemCount={itemCount}
                                >

                                </CartIcon>
                            )}
                            queryName={GET_ITEM_COUNT}
                       >

                       </QueryContainer>
                    );
                }
            }
        </Mutation>*/
    );
}

export default CardIconContainer;
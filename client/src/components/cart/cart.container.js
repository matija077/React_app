import React from 'react';
import { Query, Mutation, useMutation, useQuery } from 'react-apollo';

import Cart from './cart.component';

import { queriesAndMutations } from '../../graphQL/resolvers';

function CartContainer({history}) {
    var { TOGGLE_CART_HIDDEN } = queriesAndMutations.mutations;
    var { GET_CART_ITEMS } = queriesAndMutations.queries;

    var { data: { cartItems = [] } = {} } = useQuery(GET_CART_ITEMS);
    var [ toggleCartHidden ] = useMutation(TOGGLE_CART_HIDDEN);

    console.log(cartItems);

    return(
        <Cart
            toggleCartHidden={toggleCartHidden}
            cartItems={cartItems}
            history={history}
        >
        </Cart>
    );
}

export default CartContainer;

/*
<Mutation mutation={TOGGLE_CART_HIDDEN}>
            {
                (mutateFunction = () => {}, {data, error, loading}) => {
                    if (loading || error) {
                        if (error) {
                             console.log(error);
                        }
                        return;
                    }
                    console.log(mutateFunction);

                    return (
                        <Query query={GET_CART_ITEMS}>
                            {
                                ({data, error, loading}) => {
                                    if (loading || error) {
                                        if (error) {
                                             console.log(error);
                                        }
                                        return;
                                    }

                                    console.log(data);

                                    let { cartItems } = data || {};
                                    console.log(cartItems);
                                    return (
                                        <Cart
                                            toggleCartHidden={mutateFunction}
                                            cartItems={cartItems}
                                            history={history}
                                        >
                                        </Cart>
                                    );
                                }
                            }
                        </Query>
                    );
                }
            }
        </Mutation>
*/
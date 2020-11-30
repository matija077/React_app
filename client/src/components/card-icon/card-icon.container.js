import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartIcon  from './card-icon.component';

const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`;

function CardIconContainer() {

    return(
        <Mutation mutation={TOGGLE_CART_HIDDEN}>
            {
                (toggleCartHidden) => {
                    console.log(toggleCartHidden);
                    return (
                        <CartIcon
                            toggleCartHidden={toggleCartHidden ?? null}
                        >

                        </CartIcon>
                    );
                }
            }
        </Mutation>
    );
}

export default CardIconContainer;
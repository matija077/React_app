import React from 'react';
import { Mutation } from 'react-apollo';
import { mutations } from '../../graphQL/resolvers';

import CartIcon  from './card-icon.component';

function CardIconContainer() {
    const TOGGLE_CART_HIDDEN = mutations.TOGGLE_CART_HIDDEN;

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
import React from 'react';
import { useMutation } from 'react-apollo';

import ItemCollection from './item-collection.component';

import { mutations } from '../../graphQL/resolvers';

function ItemCollectionContainer(props) {
    var [addItem] = useMutation(mutations.ADD_ITEM_TO_CART);

    var addItemWrapper = (item) =>
        addItem({ variables: { item: item } })

    console.log(addItemWrapper);

    return(
        <ItemCollection
            {...props}
            addItem={addItemWrapper}
        ></ItemCollection>
    );


}

export default ItemCollectionContainer;
import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/item-collection/item-collection.component';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionsContext from '../../context/collections/collections.context';

import './collection.scss';

function CollectionPage({ match }) {
    //const { title, items } = collection;

    return (
        <CollectionsContext.Consumer>
        {
            collections => {
                const collection = collections[match.params.collectionId];
                const { title, items } = collection;

                return(
                    <div className="collection-page">
                        <h2 className="title">{ title }</h2>
                        <div className="items">
                            {
                                items.map(item =>
                                    <CollectionItem key={item.id} item={item} />)
                            }
                        </div>
                    </div>
                );
            }
        }
        </CollectionsContext.Consumer>
    );
}

const mapStateToProps = (state, ownProps) => ({
     collection: selectCollection(ownProps.match.params.collectionId)(
         state
     )
})

export default CollectionPage;
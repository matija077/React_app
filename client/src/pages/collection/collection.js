import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/item-collection/item-collection.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.scss';

function CollectionPage(props) {
    console.log(props);
    const { title, items } = props.collection;

    return (
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

const mapStateToProps = (state, ownProps) => ({
     collectionOld: selectCollection(ownProps.match.params.collectionId)(
         state
     )
})

export default connect(mapStateToProps)(CollectionPage);
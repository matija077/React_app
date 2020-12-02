import React from 'react';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionsPage from './collection';
import WithSpinner from '../../components/spinner/with-spinner.component';

const GET_COLLECTION_BY_TITLE = gql`
    query getCollectionsByTitle($title: String!) {
        getCollectionsByTitle(title: $title){
            id
            title
            items{
                id
                name
                price
                imageUrl
            }
        }
    }
`;

function CollectionPageContainer({ match }) {

    return(
        <Query
            query={GET_COLLECTION_BY_TITLE}
            variables={{ title: match.params.collectionId }}
        >
            {
                ({
                    loading,
                    data,
                    error
                }) => {
                    var returnObject = {};
                    var collection = data?.getCollectionsByTitle;

                    if (error) {
                        returnObject = <div>Error {error}</div>;
                    } else {
                        if (loading) {
                            const Spinner = WithSpinner(null);
                            returnObject = <Spinner isLoading></Spinner>;
                            // return <Spinner isLoading></Spinner>;
                        } else {
                            console.log(collection);
                            returnObject =
                                <CollectionsPage
                                    collection={collection}
                                    match={match}>
                                </CollectionsPage>
                        }
                    }

                    return returnObject;
                }
            }
        </Query>
    );
}

export default CollectionPageContainer;
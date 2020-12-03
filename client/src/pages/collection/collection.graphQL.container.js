import React from 'react';

import { Query } from 'react-apollo';
import { queries } from '../../graphQL/resolvers';

import CollectionsPage from './collection';
import WithSpinner from '../../components/spinner/with-spinner.component';

function CollectionPageContainer({ match }) {
    const GET_COLLECTION_BY_TITLE = queries.GET_COLLECTION_BY_TITLE;

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
                        return <div>Error {JSON.stringify(error)}</div>;
                    } else {
                        if (loading) {
                            const Spinner = WithSpinner(null);
                            return <Spinner isLoading></Spinner>;
                        } else {
                            console.log(collection);
                            return (
                                <CollectionsPage
                                    collection={collection}
                                    match={match}>
                                </CollectionsPage>
                            )
                        }
                    }

                    return returnObject;
                }
            }
        </Query>
    );
}

export default CollectionPageContainer;
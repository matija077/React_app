import React from 'react';
import { Query } from 'react-apollo';
import { queries } from '../../graphQL/resolvers';


import CollectionsOverview from './collections-overview.component';
import WithSpinner from '../spinner/with-spinner.component';


function CollectionsOverviewContainer() {
    const GET_COLLECTIONS = queries.GET_COLLECTIONS;

    return (
        <Query query={GET_COLLECTIONS}>
            {
                ({ loading, error, data }) => {
                    console.log(loading);
                    console.log(error);
                    console.log(data);
                    if (loading) {
                        const Spinner = WithSpinner(null);
                        return (
                            <Spinner isLoading={loading}>

                            </Spinner>
                        );
                    } else if (error) {
                        return (
                            <div>
                                ERROR {error}
                            </div>
                        );
                    } else {
                        return (
                            <CollectionsOverview
                                collections={data.collections}>

                            </CollectionsOverview>
                        );
                    }
                }
            }
        </Query>
    );
}

export default CollectionsOverviewContainer;
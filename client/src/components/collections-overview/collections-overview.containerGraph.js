import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionsOverview from './collections-overview.component';
import WithSpinner from '../spinner/with-spinner.component';

const GET_COLLECTIONS = gql`
     {
         collections {
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

function CollectionsOverviewContainer() {

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
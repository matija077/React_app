import React from 'react';

import { Query} from 'react-apollo';

import WithSpinner from '../components/spinner/with-spinner.component';
import Error from '../components/error/error.component';

function QueryContainer({ queryName, render }) {

    return(
        <Query query={queryName}>
        {
            ({ data, loading, error }) => {
                if (error) {
                    return <Error error={error}></Error>
                }

                const Spinner = WithSpinner(render(data));
                console.log(Spinner);
                    return (
                        <Spinner isLoading={loading}>

                        </Spinner>
                    );
            }
        }
        </Query>
    );
}

export default QueryContainer;
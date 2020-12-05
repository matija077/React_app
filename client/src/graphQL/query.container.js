import React from 'react';

import { useQuery} from 'react-apollo';

import WithSpinner from '../components/spinner/with-spinner.component';
import Error from '../components/error/error.component';

function QueryContainer({ queryName, render }) {
    var { data, loading, error } = useQuery(queryName);

    if (error) {
        return <Error error={error}></Error>
    }

    const Spinner = WithSpinner(render(data));
    return (
        <Spinner isLoading={loading}>

        </Spinner>
    );
}

/*import { Query} from 'react-apollo';

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
}*/

export default QueryContainer;
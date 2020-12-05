import React from 'react';

import { useMutation, useQuery } from 'react-apollo';
import WithSpinner from '../components/spinner/with-spinner.component';
import Error from '../components/error/error.component';

function GraphQLHooksContainer({ mutationName, queryName, render }) {
    var {data: queryData, loading: queryLoading,  error: queryError} = useQuery(queryName);
    var [mutationFunction, {data: mutationData, loading: mutationLoading,  error: mutationError}]
        = useMutation(mutationName);

    if (queryError || mutationError) {
        let error = [];

        if (queryError) {
            error.push(queryError)
        }
        if (mutationError) {
            error.push(mutationError)
        }

        return <Error error={error}></Error>
    }

    const result = {
        data: queryData,
        mutationFunction: mutationFunction
    };

    const Spinner = WithSpinner(render(result));
    const loading = queryLoading ? queryLoading : mutationLoading
    return (
        <Spinner isLoading={loading}>

        </Spinner>
    );
}

export default GraphQLHooksContainer;
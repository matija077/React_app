import React from 'react';

import { Query} from 'react-apollo';

import WithSpinner from '../components/spinner/with-spinner.component';

function QueryContainer(props) {
    var { queryName, render } = props;
    console.log(queryName)
    console.log(render);

    return(
        <Query query={queryName}>
        {
            ({ data, loading, error }) => {
                if (error) {
                    return <div>Error</div>
                }

                //if (loading) {
                const Spinner = WithSpinner(render(data));
                console.log(Spinner);
                    return (
                        <Spinner isLoading={loading}>

                        </Spinner>
                    );
                /*} else {
                    return render(data)
                }*/
            }
        }
        </Query>
    );
}

export default QueryContainer;
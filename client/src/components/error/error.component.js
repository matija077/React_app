import React from 'react';

import {
    ErrorStyledContainer,
} from './error.styled.component.js'

function Error({ error }) {
    error = error ? error : "Generic Error";

    return(
        <ErrorStyledContainer >
        {
            JSON.stringify(error)
        }
        </ErrorStyledContainer>
    );
}

export default Error;
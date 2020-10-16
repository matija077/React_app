import React from 'react';

import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles';

function WithSpinner(WrappedComponent) {
    return function Spinner({isLoading, ...otherProps}) {
        return isLoading ?
            (
                <SpinnerOverlay>
                    <SpinnerContainer></SpinnerContainer>
                </SpinnerOverlay>
            )
        :
        (
                <WrappedComponent {...otherProps}></WrappedComponent>
        );
    };
}

export default WithSpinner;
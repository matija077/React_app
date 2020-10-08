import React from 'react';

import {SpinnerContainer, SpinnerOverlay} from './spinnerWrapper.styles';

function SpinnerWrapper(WrappedComponent) {
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

export default SpinnerWrapper;
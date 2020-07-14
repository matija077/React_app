import React from 'react';

import './SubmitButton.style.scss';

function SubmitComponent({children, isGoogleSignIn, inverted, ...otherProps}) {
   // console.log(otherProps.onClick);
    return(
        <button
            className={`${inverted ? 'inverted' : '' }
            ${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`}
            {...otherProps}
        >
            {children}
        </button>

    );
}

export default SubmitComponent;
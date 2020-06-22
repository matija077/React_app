import React from 'react';

import './SubmitButton.style.scss';

function SubmitComponent({children, ...otherProps}) {
    return(
        <button
            className="custom-button"
            {...otherProps}
        >
            {children}
        </button>

    );
}

export default SubmitComponent;
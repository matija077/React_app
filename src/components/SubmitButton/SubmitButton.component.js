import React from 'react';

import './SubmitButton.style.scss';

function SubmitComponent({children, ...otherProps}) {
   // console.log(otherProps.onClick);
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
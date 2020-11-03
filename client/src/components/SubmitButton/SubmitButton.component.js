import React from 'react';

import { SubmitButtonContainer } from './SubmitButton.styles';

function SubmitComponent({children, ...props}) {
   // console.log(otherProps.onClick);
    return(
        <SubmitButtonContainer {...props}
        >
            {children}
        </SubmitButtonContainer>

    );
}

export default SubmitComponent;
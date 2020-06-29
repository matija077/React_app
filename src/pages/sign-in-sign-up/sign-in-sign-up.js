import React from 'react';

import './sign-in-sign-up.style.scss';

import SignIn from '../../components/sign-in/sign-in.component';

function SingInAndSingUpPage(props) {
    return(
        <SignIn className="sing-in-and-sing-up" {...props}>
            SIGN IN
        </SignIn>
    );
}

export default SingInAndSingUpPage;
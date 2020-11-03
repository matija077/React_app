import React from 'react';

import './sign-in-sign-up.style.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/signUp.component';

function SingInAndSingUpPage(props) {
    return(
        <div className="sign-in-and-sign-up">
            <SignIn className="sign-in" {...props}>
                SIGN IN
            </SignIn>
            <SignUp className="sign-up" {...props}>
                SIGN UP
            </SignUp>
        </div>
    );
}

export default SingInAndSingUpPage;
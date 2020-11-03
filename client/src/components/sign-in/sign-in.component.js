import React, { useState } from 'react';
import { connect } from 'react-redux'

import './sign-in.style.scss';

import FormInput from '../from-input/form-input.component';
import SubmitButton from '../SubmitButton/SubmitButton.component';

import preventDefaultFunction from '../functions/preventDefault';
import { googleSignInStart, emailSignInStart  } from '../../redux/user/user.actions';

function SignIn({emailSignInStart, googleSignInStart}) {

    var userStartCredentials = {
        email: "matija.prs@gmail.com",
        password: "",
    };

    var [userCredentials, setUserCredentials] = useState(userStartCredentials);
    var {email, password} = userCredentials;

    function clearState() {
        setUserCredentials(userStartCredentials);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const {email, password} = userCredentials

        emailSignInStart(email, password);
    }

    function handleChange(event) {
        const {name: formInputName, value} = event.target;

        setUserCredentials({
            ...userCredentials,
            [formInputName]: value
        });
    }

    const preventDefaultBind = preventDefaultFunction.bind(null, googleSignInStart);

    /*function redirect(history) {
        history.goBack();
    }
    const redirectBind = redirect.bind(null, history);*/


    return (
        <div className="sign-in" onSubmit={handleSubmit}>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    required
                    handleChange={handleChange}
                    label="email">
                </FormInput>
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    required
                    handleChange={handleChange}
                    label="password">
                </FormInput>

                <div className="submit-buttons">
                    <SubmitButton type="submit">Sign In</SubmitButton>
                    <SubmitButton
                        onClick={(event) => preventDefaultBind(event)}
                        isGoogleSignIn>
                        Sign in with Google
                    </SubmitButton>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
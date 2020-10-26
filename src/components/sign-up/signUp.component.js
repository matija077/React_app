import React,  { useState } from 'react';
import {connect} from 'react-redux';

import './signUp.style.scss';

import FormInput from '../from-input/form-input.component';
import SubmitButton from '../SubmitButton/SubmitButton.component';

import {
    signUpStart,
} from '../../redux/user/user.actions';
function SignUp({dispatch}) {
    const emptyState = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const [userCredentials, setCredentials] = useState(emptyState);

    async function handleSubmit(event) {
        event.preventDefault();

        const {displayName, email, password,
            confirmPassword} = userCredentials;

        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        dispatch(signUpStart({email, password, displayName}));
    }

    async function handleChange(event){
        const { name, value} = event.target;

        setCredentials({
            ...userCredentials,
            [name]: value,
        });
    }

    const {displayName, email, password,
        confirmPassword} = userCredentials;
    //const handleChange = this.handleChange;

    return(
        <div className="sign-up">
            <h2 className="title">
                <span>
                    Sign up with your email and your password
                </span>
                <form
                    className="sign-up-form"
                    onSubmit={handleSubmit}
                >
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        handleChange={handleChange}
                        label="Display Name"
                        required
                    >

                    </FormInput>
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        handleChange={handleChange}
                        label="Email"
                        required
                    >
                    </FormInput>
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        handleChange={handleChange}
                        label="Password"
                        required
                    ></FormInput>
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={handleChange}
                        label="Confirm Password"
                        required
                    ></FormInput>
                    <SubmitButton type="submit">
                        SIGN UP
                    </SubmitButton>
                </form>
            </h2>
        </div>
    );
}

const mapDispatchToProps1 = (dispatch) => ({
    signUpStart: (credentials) =>
        dispatch(signUpStart(credentials))
});

export default connect(
    null,
    null
)(SignUp);
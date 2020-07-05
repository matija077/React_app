import React from 'react';

import './signUp.style.scss';

import FormInput from '../from-input/form-input.component';
import SubmitButton from '../SubmitButton/SubmitButton.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import preventDefaultFunction from '../functions/preventDefault';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };

        this.emptyState = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();

        const {displayName, email, password,
            confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email, password);

            await createUserProfileDocument(user, displayName);

            this.setState({
                ...this.emptyState
            });
        } catch(error) {
            console.log(error);
        }
    }

    handleChange(event){
        const { name, value} = event.target;

        this.setState({
            [name]: value,
        });
    }

    render() {
        const {displayName, email, password,
            confirmPassword} = this.state;
        const handleChange = this.handleChange;

        return(
            <div className="sign-up">
                <h2 className="title">
                    <span>
                        Sign up with your email and your password
                    </span>
                    <form
                        className="sign-up-form"
                        onSubmit={this.handleSubmit}
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
}

export default SignUp;
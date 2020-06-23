import React from 'react';

import './sign-in.style.scss';

import FormInput from '../from-input/form-input.component';
import SubmitButton from '../SubmitButton/SubmitButton.component';

import { signInWithGoogle }from '../../firebase/firebase.utils';
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "matija.prs@gmail.com",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        console.dir(event.target);
    }

    handleChange(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        var {email, password} = this.state;

        /**
         * to prevent defautl behaviour of forms. can be used for toher DOM
         * related events.
         * @param {Function} f function which will be called
         * @param {Event} event used to preventDefautl behaviour
         * @param  {...any} params any params passed to the function
         */
        function preventDefaultFunction(f, event, ...params) {
            event.preventDefault();
            f(...params);
        }

        const preventDefaultConst = preventDefaultFunction.bind(this, signInWithGoogle);

        return (
            <div className="sign-in" onSubmit={this.handleSubmit}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form>
                    <FormInput
                        name="email"
                        type="email"
                        value={email}
                        required
                        handleChange={this.handleChange}
                        label="email">
                    </FormInput>
                    <FormInput
                        name="password"
                        type="password"
                        value={password}
                        required
                        handleChange={this.handleChange}
                        label="password">
                    </FormInput>

                    <div className="submit-buttons">
                        <SubmitButton type="input">Sign In</SubmitButton>
                        <SubmitButton onClick={(event) => preventDefaultConst(event, 3, 2)}>Sign in with Google</SubmitButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
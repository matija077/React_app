import React from 'react';

import './sign-in.style.scss';

import FormInput from '../from-input/form-input.component';
import SubmitButton from '../SubmitButton/SubmitButton.component';

import { signInWithGoogle }from '../../firebase/firebase.utils';
import preventDefaultFunction from '../functions/preventDefault';
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "matija.prs@gmail.com",
            password: "",
            history: props.history,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        //console.dir(event.target);
    }

    handleChange(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        var {email, password, history} = this.state;

        const preventDefaultBind = preventDefaultFunction.bind(this, signInWithGoogle);

        function redirect(history) {
            history.goBack();
        }
        const redirectBind = redirect.bind(null, history);


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
                        <SubmitButton
                            onClick={(event) => preventDefaultBind(event, redirectBind)}
                            isGoogleSignIn>
                            Sign in with Google
                        </SubmitButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
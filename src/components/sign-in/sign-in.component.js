import React from 'react';
import { connect } from 'react-redux'

import './sign-in.style.scss';

import FormInput from '../from-input/form-input.component';
import SubmitButton from '../SubmitButton/SubmitButton.component';

import { auth, signInWithGoogle }from '../../firebase/firebase.utils';
import preventDefaultFunction from '../functions/preventDefault';
import { googleSignInStart  } from '../../redux/user/user.actions';
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "matija.prs@gmail.com",
            password: "",
            history: props.history,
        };

        this.startState = this.state;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearState = this.clearState.bind(this);
    }

    clearState() {
        this.setState({...this.startState}, console.log(this.state));
    }

    async handleSubmit(event) {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.clearState();
        } catch(error) {
            console.log(error);
        }

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
        const { googleSignInStart } = this.props;

        const preventDefaultBind = preventDefaultFunction.bind(null, googleSignInStart);

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
}

const mapDisaptchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null, mapDisaptchToProps)(SignIn);
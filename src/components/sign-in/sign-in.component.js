import React from 'react';
import { connect } from 'react-redux'

import './sign-in.style.scss';

import FormInput from '../from-input/form-input.component';
import SubmitButton from '../SubmitButton/SubmitButton.component';

import preventDefaultFunction from '../functions/preventDefault';
import { googleSignInStart, emailSignInStart  } from '../../redux/user/user.actions';
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
        const {emailSignInStart} = this.props;

        emailSignInStart(email, password);
    }

    handleChange(event) {
        const {name: formInputName, value} = event.target;

        this.setState({
            [formInputName]: value
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

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
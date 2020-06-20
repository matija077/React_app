import React from 'react';

import './sign-in.style.scss';

import FormInput from '../from-input/form-input.component';

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

                    <input type="submit" value="Submit form"></input>
                </form>
            </div>
        );
    }
}

export default SignIn;
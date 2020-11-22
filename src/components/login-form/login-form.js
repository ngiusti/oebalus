import React, { Component } from 'react';

import FormInput from '../form-input/form-input'
import CustomButton from '../UI/custom-button/custom-button'

import { auth } from '../../firebase/firebase.utils'

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
        };
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: "",
            })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { email, password } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <FormInput
                    type='email'
                    name='email'
                    label='Email'
                    onChange={this.handleChange}
                    value={email}
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    label='Password'
                    onChange={this.handleChange}
                    value={password}
                    required
                />
                <CustomButton type="submit">Login</CustomButton>
                <CustomButton>Guest</CustomButton>
                <CustomButton clicked={this.props.isMember}>Create Account</CustomButton>
            </form >
        )
    }
}

export default LoginForm
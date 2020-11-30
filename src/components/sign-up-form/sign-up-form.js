import React, { Component } from 'react';

import FormInput from '../form-input/form-input'
import CustomButton from '../UI/custom-button/custom-button'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'



class SignUpForm extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
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
        const { username, email, password } = this.state;

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { username })

            this.setState({
                username: "",
                email: "",
                password: "",
            })

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { username, email, password } = this.state;

        return (
            <form className="sign-up-form__wrap" onSubmit={this.handleSubmit}>
                <FormInput
                    type='text'
                    name='username'
                    label='User Name'
                    onChange={this.handleChange}
                    value={username}
                    required
                />
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
                <CustomButton type="submit">Sign Up</CustomButton>
                <CustomButton clicked={this.props.isMember}>Back</CustomButton>
            </form>
        )
    }
}

export default SignUpForm;
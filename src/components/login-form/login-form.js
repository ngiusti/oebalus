import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'

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

    handleGuest = event => {
        event.preventDefault();
        this.props.onGuestLogin();
        console.log(this.props.stateVal)
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
                <CustomButton clicked={this.handleGuest}>Guest</CustomButton>
                <CustomButton clicked={this.props.isMember}>Create Account</CustomButton>
            </form >
        )
    }
}

const mapStateToProps = state => {
    return {
        stateVal: state,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGuestLogin: () => dispatch({ type: actionTypes.ADD_GUEST }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
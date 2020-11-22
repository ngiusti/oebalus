import React, { Component } from 'react';

import FormInput from '../form-input/form-input'
import CustomButton from '../UI/custom-button/custom-button'

import { auth } from '../../firebase/firebase.utils'

class LoginForm extends Component {
    constructor() {
        super()
    }


    render() {

        return (
            <div >
                <h1>User Name</h1>
                <CustomButton >Log Out</CustomButton>
            </div >
        )
    }
}

export default LoginForm
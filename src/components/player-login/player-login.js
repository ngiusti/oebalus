import React, { Component } from 'react'

import SignUpForm from '../sign-up-form/sign-up-form'
import LoginForm from '../login-form/login-form'
import LoggedInCard from '../logged-in-card/logged-in-card'
import CustomButton from '../UI/custom-button/custom-button'

import './player-login.scss'

class PlayerLogin extends Component {
    constructor() {
        super();
        this.state = {
            isMember: true,
            isLoggedIn: true
        };
    }

    HandleLoggedInState = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    handlerisMember = () => {
        this.setState({
            isMember: !this.state.isMember
        })
    }

    render() {
        const { isMember, isLoggedIn } = this.state

        return (
            <div className="player-login__wrap">
                <h2>Player {this.props.player}</h2>
                {
                    isLoggedIn ? (isMember ? <LoginForm isMember={this.handlerisMember} /> : <SignUpForm isMember={this.handlerisMember} />) : <LoggedInCard />
                }
                <CustomButton clicked={this.HandleLoggedInState}>Toggle Logged in</CustomButton>
            </div>
        )
    }

}

export default PlayerLogin;
import React, { Component } from 'react'

import SignUpForm from '../sign-up-form/sign-up-form'
import LoginForm from '../login-form/login-form'

import './player-login.scss'

class PlayerLogin extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: true
        };
    }

    handlerLoggedIn = () => {
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    }

    render() {
        const { loggedIn } = this.state

        return (
            <div className="player-login__wrap">
                <h2>Player {this.props.player}</h2>
                {
                    loggedIn ? <LoginForm loggedIn={this.handlerLoggedIn} /> : <SignUpForm loggedIn={this.handlerLoggedIn} />
                }
            </div>
        )
    }

}

export default PlayerLogin;
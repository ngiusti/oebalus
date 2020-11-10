import React from 'react'

import PlayerLogin from '../../components/player-login/player-login'
import LinkButton from '../../components/UI/link-button/link-button'

import './login-screen.scss'


const LoginScreen = () => (
    <div className="center-content">
        <div className="login-screen-player__wrap">
            <PlayerLogin />
            <PlayerLogin />
            <PlayerLogin />
        </div>
        <LinkButton link="/SessionType">Next</LinkButton >
    </div>
)

export default LoginScreen
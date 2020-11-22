import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'

import PlayerLogin from '../../components/player-login/player-login'
import LinkButton from '../../components/UI/link-button/link-button'

import './login-screen.scss'


class LoginScreen extends Component {
    render() {
        return (
            <div className="center-content">
                <div className="login-screen-player__wrap">
                    <PlayerLogin />
                </div>
                <LinkButton link="/SessionType">Next</LinkButton >
            </div>
        )
    }

}

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPlayerLogin: () => dispatch({ type: actionTypes.ADD_PLAYER, }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
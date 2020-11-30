import React from 'react'

import './home-screen.scss'

import LinkButton from '../../components/UI/link-button/link-button'
import Badge from '../../components/badge/badge'

const HomeScreen = () => (
    <div className="center-content">
        <div className="home-header__wrap">
            <Badge />
        </div>
        <LinkButton link="/Login">Start</LinkButton >
    </div>
)

export default HomeScreen
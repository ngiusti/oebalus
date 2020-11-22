import React, { Component } from 'react'
import { connect } from 'react-redux'

import LinkButton from '../../components/UI/link-button/link-button'

class DataScreen extends Component {
    render() {
        return (
            <div className="center-content">
                <h1>Data</h1>
                <h2>Session Type: {this.props.gameType}</h2>
                <h2>Name: {this.props.name}</h2>
                <h2>Score: {this.props.score}</h2>
                <h2>Misses: {this.props.miss}</h2>
                <LinkButton link="/">Home</LinkButton >
            </div>
        )
    }

}


const mapStateToProps = state => {
    return {
        name: state.name,
        shots: state.shots,
        shotsRemaining: state.shotsRemaining,
        score: state.score,
        miss: state.miss,
        gameType: state.gameType,
    };
}

export default connect(mapStateToProps)(DataScreen)
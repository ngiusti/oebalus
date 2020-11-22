import React, { Component } from 'react'
import { connect } from 'react-redux'

import LinkButton from '../../components/UI/link-button/link-button'
import CustomButton from '../../components/UI/custom-button/custom-button'

import Shots from '../../components/session-parts/shots/shots'
import * as actionTypes from '../../store/actions'

import './session-screen.scss'

import Target from '../../assets/images/target.png'



class SessionScreen extends Component {
    state = {
        timer: 0,
        gameDone: false,
        roundStart: false,
        shots: 10,
        shotsRemaining: 10,
        imageUrl: Target,
        score: 0,
        time: 0
    }


    getSeconds = (time) => {
        return ('0' + time % 60).slice(-2);
    }

    getMin = (time) => {
        return Math.floor(time / 60);
    }

    shotsFired = () => {
        this.setState({
            shotsRemaining: this.props.shotsRemaining - 1
        })
    }

    handleStart = () => {
        this.setState({
            roundStart: true
        })

        var _this = this
        if (this.incrementer) {
            return;
        } else {
            this.incrementer = setInterval(() => {
                _this.setState({
                    timer: _this.state.timer + 1
                })
            }, 1000);
        }
    }

    handleStop = () => {
        clearInterval(this.incrementer);
        this.incrementer = null;
    }

    shotsHandler = () => {
        this.props.onShotsFired();
        console.log(this.props.shotsRemaining)
        if (this.props.shotsRemaining === 1) {
            this.handleStop();
        }
    }

    missHandler = () => {
        this.props.onShotMiss();
        this.shotsHandler()
    }

    hitHandler = () => {
        this.props.onShotHit();
        this.shotsHandler()
    }


    render() {
        return (
            <div className="game-screen">
                <div className="target-progress__wrap">
                    <div className="target__wrap">
                        <img className="target" src={this.state.imageUrl} alt="Target" />
                    </div>
                    <div className="shots__wrap">
                        <Shots shots={this.props.shots} shotsRemaining={this.props.shotsRemaining} />
                    </div>
                </div>
                <div className="info__wrap">
                    <h3 className="game-name">{this.props.gameType}</h3>
                    <div className="players__wrap">
                        <div className={['player__wrap', "player__active"].join(' ')} >
                            <h2>{this.props.name}</h2>
                            <p>Score: {this.props.score}</p>
                            <p>Misses: {this.props.miss}</p>
                            <p >Time: {this.getMin(this.state.time)}:{this.getSeconds(this.state.time)}</p>
                        </div>
                    </div>
                    <div className="player-card">
                        <p className="player-score">Score: {this.state.score}</p>
                        <p className="player-info">Time: {this.getMin(this.state.timer)}:{this.getSeconds(this.state.timer)}</p>
                    </div>
                    <div className="button__wrap">
                        <CustomButton clicked={this.handleStart} disabled={this.state.gameDone || this.state.roundStart}>Start</CustomButton>
                        <CustomButton clicked={this.hitHandler} disabled={!this.state.timer || this.state.gameDone || this.props.shotsRemaining == 0}>Next Shot</CustomButton>
                        <CustomButton clicked={this.missHandler} disabled={!this.state.timer || this.state.gameDone || this.props.shotsRemaining == 0}>Missed Shot</CustomButton>
                    </div>
                    <hr style={{ backgroundColor: 'white' }} />
                    <div className="button__wrap">
                        <LinkButton link="/SessionType">New Session</LinkButton>
                        <LinkButton link="/Data">End Session</LinkButton>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatToProps = state => {
    return {
        name: state.name,
        shots: state.shots,
        shotsRemaining: state.shotsRemaining,
        score: state.score,
        miss: state.miss,
        gameType: state.gameType,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onShotsFired: () => dispatch({ type: actionTypes.SHOT_FIRED }),
        onShotMiss: () => dispatch({ type: actionTypes.MISS_COUNTER }),
        onShotHit: () => dispatch({ type: actionTypes.HIT_COUNTER })
    };
}

export default connect(mapStatToProps, mapDispatchToProps)(SessionScreen);
import React, { Component } from 'react'

import LinkButton from '../../components/UI/link-button/link-button'
import CustomButton from '../../components/UI/custom-button/custom-button'

import Shots from '../../components/session-parts/shots/shots'

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
        gameType: 'Cluster',
        score: "",
        name: "Player",
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
            shotsRemaining: this.state.shotsRemaining - 1
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
        this.shotsFired();
        if (this.state.shotsRemaining === 1) {
            this.handleStop();
        }
    }

    missHandler = () => {
        this.shotsHandler()
    }

    hitHandler = () => {
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
                        <Shots shots={this.state.shots} shotsRemaining={this.state.shotsRemaining} />
                    </div>
                </div>
                <div className="info__wrap">
                    <h3 className="game-name">{this.state.gameType}</h3>
                    <div className="players__wrap">
                        <div className={['player__wrap', "player__active"].join(' ')} >
                            <h2>{this.state.name}</h2>
                            <p>Score: {this.state.score}</p>
                            <p >Time: {this.getMin(this.state.time)}:{this.getSeconds(this.state.time)}</p>
                        </div>
                    </div>
                    <div className="player-card">
                        <p className="player-score">Score: {this.state.score}</p>
                        <p className="player-info">Time: {this.getMin(this.state.timer)}:{this.getSeconds(this.state.timer)}</p>
                    </div>
                    <div className="button__wrap">
                        <CustomButton clicked={this.handleStart} disabled={this.state.gameDone || this.state.roundStart}>Start</CustomButton>
                        <CustomButton clicked={this.missHandler} disabled={!this.state.timer || this.state.gameDone || this.state.shotsRemaining == 0}>Next Shot</CustomButton>
                        <CustomButton clicked={this.hitHandler} disabled={!this.state.timer || this.state.gameDone || this.state.shotsRemaining == 0}>Missed Shot</CustomButton>
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

export default SessionScreen;
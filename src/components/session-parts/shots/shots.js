import React, { Component } from 'react'

import './shots.scss'


class Shots extends Component {
    render() {
        let shots = []
        console.log(this.props.shotsRemaining)
        console.log(this.props.shots)
        for (let j = 0; j < (this.props.shots - this.props.shotsRemaining); j++) {
            shots.push(<div className='bullet fired'></div>);
        }
        for (let i = 0; i < (this.props.shots - (this.props.shots - this.props.shotsRemaining)); i++) {
            shots.push(<div className='bullet'></div>);
        }


        return (
            <div className='clip'>
                {shots}
                <div className='shot-counter'>
                    <h2>{this.props.shotsRemaining}</h2>
                </div>
            </div>
        )
    }
}


export default Shots
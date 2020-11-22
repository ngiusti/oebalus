import * as actionTypes from './actions'

const intialState = {
    gameType: 'Cluster',
    name: 'Ben',
    shots: 10,
    shotsRemaining: 10,
    score: 0,
    miss: 0,
    timer: '0:00',
}


const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PLAYER:
            console.log(action.payload.username)
            return {
                ...state,
                players: [action.payload]
            }
        case actionTypes.SHOT_FIRED:
            if (state.shotsRemaining > 0) {
                return {
                    ...state,
                    shotsRemaining: state.shotsRemaining - 1
                }
            }
        case actionTypes.MISS_COUNTER:
            return {
                ...state,
                miss: state.miss + 1,
            }
        case actionTypes.HIT_COUNTER:
            return {
                ...state,
                score: state.score + 10,
            }
        case actionTypes.RESET_SHOTS:
            return {
                ...state,
                shotsRemaining: intialState.shots,
                score: intialState.score,
                miss: intialState.miss,
                timer: intialState.timer,
            }
        case actionTypes.GET_TIME:
            console.log(action.payload)
            return {
                ...state,
                timer: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;
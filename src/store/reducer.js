import * as actionTypes from './actions'

const intialState = {
    gameType: 'Cluster',
    name: 'Ben',
    shots: 10,
    shotsRemaining: 10,
    score: 0,
    miss: 0,
}


const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PLAYER:
            return {
                ...state,
                players: [action.payload]
            }
        case actionTypes.SHOTS:
            return {
                ...state,
                shots: action.shots,
                shotsRemaining: action.shotsRemaining
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
        default:
            return state;
    }
}

export default reducer;
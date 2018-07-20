export const START_NEW_ROUND = "START_NEW_ROUND"
export const SET_SINGLE_SCORE_FOR_PLAYER = "SET_SINGLE_SCORE_FOR_PLAYER"
export const CHOOSE_SINGLE_PLAYER = 'CHOOSE_SINGLE_PLAYER'
export const CHOOSE_COURSE = 'CHOOSE_COURSE'
export const SET_CURRENT_HOLE = "SET_CURRENT_HOLE"
export const FINISH_ROUND = "FINISH_ROUND"

export const startNewRound = () => {
    return {
        type: START_NEW_ROUND,
    }
}

export const setSingleScoreForPlayer = (playerId, holeNo, score) => {
    return {
        type: SET_SINGLE_SCORE_FOR_PLAYER,
        playerId,
        holeNo,
        score
    }
}

export const chooseSinglePlayer = (player) => {
    return {
        type: CHOOSE_SINGLE_PLAYER,
        player
    }
}
export const chooseCourse = (course) => {
    return {
        type: CHOOSE_COURSE,
        course
    }
}

export const setCurrentHole = (currentHole) => {
    return {
        type: SET_CURRENT_HOLE,
        currentHole
    }
}

export const finishRound = () => {
    return {
        type: FINISH_ROUND
    }
}
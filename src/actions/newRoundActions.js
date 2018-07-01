export const CHOOSE_SINGLE_PLAYER = 'CHOOSE_SINGLE_PLAYER'
export const CHOOSE_COURSE = 'CHOOSE_COURSE'
export const SET_HEADER = 'SET_HEADER'

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
export const setHeader = (header) => {
    return {
        type: SET_HEADER,
        header
    }
}
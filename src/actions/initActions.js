export const UPDATE_NO_OF_HOLES = 'UPDATE_NO_OF_HOLES';
export const UPDATE_PAR_FOR_HOLE = 'UPDATE_PAR_FOR_HOLE';
export const SET_COURSE_NAME = 'SET_COURSE_NAME';
export const SET_PLAYER_NAME = 'SET_PLAYER_NAME';
export const SET_PLAYER_NICKNAME = 'SET_PLAYER_NICKNAME';
export const SET_PLAYER_PROFILEPIC = 'SET_PLAYER_PROFILEPIC';
export const CREATE_COURSE = 'CREATE_COURSE';
export const CREATE_PLAYER = 'CREATE_PLAYER';

export const updateNoOfHoles = (noOfHoles) => {
    return {
        type: UPDATE_NO_OF_HOLES,
        noOfHoles
    }
}

export const updateParForHole = (holeNo, par) => {
    return {
        type: UPDATE_PAR_FOR_HOLE,
        holeNo,
        par
    }
}

export const setCourseName = (name) => {
    return {
        type: SET_COURSE_NAME,
        courseName: name
    }
}

export const setPlayerName = (name) => {
    return {
        type: SET_PLAYER_NAME,
        playerName: name
    }
}

export const setPlayerNickname = (name) => {
    return {
        type: SET_PLAYER_NICKNAME,
        playerNickname: name
    }
}

export const setPlayerProfilepic = (image) => {
    return {
        type: SET_PLAYER_PROFILEPIC,
        profilepic: image
    }
}

export const createCourse = () => {
    return {
        type: CREATE_COURSE,
    }
}

export const createPlayer = () => {
    return {
        type: CREATE_PLAYER,
    }
}
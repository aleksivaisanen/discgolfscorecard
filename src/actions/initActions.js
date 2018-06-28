export const ADD_HOLE = 'ADD_HOLE';
export const REMOVE_HOLE = 'REMOVE_HOLE';
export const UPDATE_PAR_FOR_HOLE = 'UPDATE_PAR_FOR_HOLE';

export const addHole = () => {
    return {
        type: ADD_HOLE
    }
}

export const removeHole = () => {
    return {
        type: REMOVE_HOLE
    }
}

export const updateParForHole = (holeNo, par) => {
    return {
        type: UPDATE_PAR_FOR_HOLE,
        holeNo,
        par
    }
}
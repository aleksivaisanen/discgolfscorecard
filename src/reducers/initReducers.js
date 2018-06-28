import { ADD_HOLE, REMOVE_HOLE, UPDATE_PAR_FOR_HOLE } from '../actions/initActions'

const defaultState = {
    noOfHoles: 1,
    parArray: [3]
}

export const initReducers = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_HOLE:
            return {
                noOfHoles: state.noOfHoles + 1,
                parArray: [...state.parArray, 3]
            }
        case REMOVE_HOLE:
            return {
                noOfHoles: state.noOfHoles - 1,
                parArray: (state.parArray).slice(0, -1)
            }
        case UPDATE_PAR_FOR_HOLE:
            const index = action.holeNo - 1;
            return {
                ...state,
                parArray: [
                    ...state.parArray.slice(0, index),
                    action.par,
                    ...state.parArray.slice(index, -1)
                ]
            }
        default:
            return state;
    }
}


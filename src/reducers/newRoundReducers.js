import {
    CHOOSE_SINGLE_PLAYER,
    CHOOSE_COURSE
} from '../actions/newRoundActions'

import Player from '../classes/Player';
import Course from '../classes/Course';

const defaultState = {
    chosenPlayers: [],
    chosenCourse: null,

}

export const newRoundReducers = (state = defaultState, action) => {
    console.log(state);
    switch (action.type) {
        case CHOOSE_SINGLE_PLAYER:
            if (state.chosenPlayers.filter(player => player.id === action.player.id).length === 0) {
                return {
                    ...state,
                    chosenPlayers: [...state.chosenPlayers, action.player]
                }
            } else {
                return {
                    ...state,
                    chosenPlayers: state.chosenPlayers.filter(player => player !== action.player)
                }
            }
        case CHOOSE_COURSE:
            if (state.chosenCourse === action.course) {
                return {
                    ...state,
                    chosenCourse: null
                }
            } else {
                return {
                    ...state,
                    chosenCourse: action.course
                }
            }
        default:
            return state;
    }
}


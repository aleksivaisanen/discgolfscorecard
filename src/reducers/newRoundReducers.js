import {
    CHOOSE_SINGLE_PLAYER,
    CHOOSE_COURSE,
    START_NEW_ROUND,
    SET_SINGLE_SCORE_FOR_PLAYER,
    SET_CURRENT_HOLE
} from '../actions/newRoundActions'

import Player from '../classes/Player';
import Course from '../classes/Course';
import RoundScore from '../classes/RoundScore';

const defaultState = {
    chosenPlayers: [new Player("Aleksi", "Aksu", {}, 0), new Player("VÄisäne", "Väiski", {}, 1)],
    chosenCourse: new Course("Lauste", [3, 3, 3, 3, 3, 3, 4, 5, 4, 6, 7], 0),
    currentRound: null, //current round id
    roundScores: [], // all the scores for all the rounds
    currentHole: 1
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
        case START_NEW_ROUND:
            let currentRoundId = Date.now(); //takes the id from current date in integer form
            return {
                ...state,
                currentRound: currentRoundId,
                roundScores: [...state.roundScores,
                ...state.chosenPlayers.map((player) => { return new RoundScore(state.chosenCourse, player, currentRoundId, state.chosenCourse.parArray) })]
            }

        case SET_SINGLE_SCORE_FOR_PLAYER:

            let round = state.roundScores.filter(round =>
                (round.id === state.currentRound && round.player.id === action.playerId))[0]
            let otherRounds = state.roundScores.filter(rnd => round !== rnd);
            let newRound = Object.assign(new RoundScore, round, {
                scoreArray: [...(round.scoreArray).slice(0, action.holeNo - 1),
                action.score,
                ...(round.scoreArray).slice(action.holeNo)
                ]
            })
            return {
                ...state,
                roundScores: [...otherRounds, newRound]
            }
        case SET_CURRENT_HOLE:
            return {
                ...state,
                currentHole: action.currentHole
            }

        default:
            return state;
    }
}


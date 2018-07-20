import {
    CHOOSE_SINGLE_PLAYER,
    CHOOSE_COURSE,
    START_NEW_ROUND,
    SET_SINGLE_SCORE_FOR_PLAYER,
    SET_CURRENT_HOLE,
    FINISH_ROUND,
} from '../actions/newRoundActions'

import Player from '../classes/Player';
import Course from '../classes/Course';
import RoundScore from '../classes/RoundScore';

const defaultState = {
    chosenPlayers: [new Player("Aleksi", "Aksu", {}, 0), new Player("VÄisäne", "Väiski", {}, 1)],
    chosenCourse: new Course("Lauste", [3, 3, 3, 3, 3, 3, 4, 5, 4, 6, 7], 0),
    currentRound: null, //current round id
    roundScores: [], // all the scores for all the rounds
    currentHole: 1,
    standings: []
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
            let newRoundScores = state.chosenPlayers.map((player) => { return new RoundScore(state.chosenCourse, player, currentRoundId, state.chosenCourse.parArray) })
            return {
                ...state,
                currentRound: currentRoundId,
                roundScores: [...state.roundScores, ...newRoundScores],
                standings: [...newRoundScores]
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
            let newScores = [...otherRounds, newRound]

            //find all the rounds with current id
            let currentRounds = newScores.filter(round => round.id == state.currentRound)

            //comparefunction for sorting standings
            const compareFunc = (a, b) => {
                let aTotal = a.scoreArray.reduce((a, b) => a + b, 0)
                let bTotal = b.scoreArray.reduce((a, b) => a + b, 0)
                if (aTotal < bTotal) {
                    return -1
                } else if (aTotal > bTotal) {
                    return 1
                } return 0
            }

            let sortedStandings = currentRounds.sort(compareFunc)

            return {
                ...state,
                standings: sortedStandings,
                roundScores: newScores
            }
        case SET_CURRENT_HOLE:
            return {
                ...state,
                currentHole: action.currentHole
            }
        
        case FINISH_ROUND:
            currentRounds = state.roundScores.filter((item) => item.id === state.currentRound)
            otherRounds = state.roundScores.filter((item) => item.id !== state.currentRound)    
            let finishedRounds = currentRounds.map(item => Object.assign(new RoundScore, item, {finished: true}))

            return {
                ...state,
                chosenPlayers: [],
                chosenCourse: null,
                currentHole: 1,
                standings: [],
                roundScores: [...otherRounds, ...finishedRounds],
                currentRound: null,

            }
        default:
            return state;
    }
}


import {
    UPDATE_PAR_FOR_HOLE,
    UPDATE_NO_OF_HOLES,
    SET_COURSE_NAME,
    SET_PLAYER_NAME,
    SET_PLAYER_NICKNAME,
    SET_PLAYER_PROFILEPIC,
    CREATE_COURSE,
    CREATE_PLAYER
} from '../actions/initActions';
import Course from '../classes/Course';
import Player from '../classes/Player'

const defaultState = {
    noOfHoles: 1,
    parArray: [3],
    courseName: "",
    playerName: "",
    playerNickname: "",
    profilepic: null,
    courses: [new Course("Lauste", [3, 3, 3, 3, 3, 3, 4, 5, 4, 6, 7], 0), new Course("Parainen", [2, 3, 4, 5, 6, 7, 8], 1)],
    players: [new Player("Aleksi", "Aksu", {}, 0), new Player("VÄisäne", "Väiski", {}, 1), new Player("Titta", "Titsu", {}, 2)]
}

export const initReducers = (state = defaultState, action) => {
    console.log(state);
    const defaultPar = 3;

    switch (action.type) {
        case UPDATE_NO_OF_HOLES:
            if (state.noOfHoles > action.noOfHoles) {
                return {
                    ...state,
                    noOfHoles: action.noOfHoles,
                    parArray: state.parArray.slice(0, action.noOfHoles)
                }
            }
            else if (state.noOfHoles < action.noOfHoles) {
                return {
                    ...state,
                    noOfHoles: action.noOfHoles,
                    parArray: [...state.parArray, defaultPar]
                }
            }
            else return state;

        case UPDATE_PAR_FOR_HOLE:
            return {
                ...state,
                parArray: [...(state.parArray).slice(0, action.holeNo - 1),
                action.par,
                ...(state.parArray).slice(action.holeNo)
                ]
            }
        case SET_COURSE_NAME:
            return {
                ...state,
                courseName: action.courseName
            }
        case SET_PLAYER_NAME:
            return {
                ...state,
                playerName: action.playerName
            }
        case SET_PLAYER_NICKNAME:
            return {
                ...state,
                playerNickname: action.playerNickname
            }
        case SET_PLAYER_PROFILEPIC:
            return {
                ...state,
                profilepic: Object.assign({}, {
                    uri: action.profilepic.path,
                    width: action.profilepic.width,
                    height: action.profilepic.height,
                    mime: action.profilepic.mime
                })
            }
        case CREATE_COURSE:
            return {
                ...state,
                noOfHoles: 1,
                parArray: [defaultPar],
                courseName: "",
                courses: [...state.courses,
                new Course(state.courseName, state.parArray, state.courses.length)]
            }
        case CREATE_PLAYER:
            return {
                ...state,
                playerName: "",
                playerNickname: "",
                profilepic: null,
                players: [...state.players,
                new Player(state.playerName, state.playerNickname, state.profilepic, state.players.length)]
            }
        default:
            return state;
    }
}


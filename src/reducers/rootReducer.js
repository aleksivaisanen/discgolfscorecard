import { combineReducers } from 'redux';
import { initReducers } from './initReducers';
import { newRoundReducers } from './newRoundReducers';

export default combineReducers({
    init: initReducers,
    newRound: newRoundReducers,
})
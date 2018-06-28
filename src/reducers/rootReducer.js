import { combineReducers } from 'redux';
import { initReducers } from './initReducers';

export default combineReducers({
    init: initReducers,
})
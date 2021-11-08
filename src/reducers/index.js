import {setFocusDuration, setBreakDuration} from './setDuration.js';
import {sessionSetting, timerSetting} from './sessionControl.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    focusDuration: setFocusDuration,
    breakDuration: setBreakDuration,
    session: sessionSetting,
    timer: timerSetting
})

export default rootReducer;
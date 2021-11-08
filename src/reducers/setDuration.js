export const setFocusDuration = (state = 25, {type, payload = null}) => {
    switch(type){
        case 'INCREMENT_FOCUS':
            return state+payload > 60 ? state: state+payload;
        case 'DECREMENT_FOCUS':
            return state-payload < 5 ? state: state-payload;
        default:
            return state;
    }
}

export const setBreakDuration = (state = 5, {type, payload = null}) => {
    switch(type){
        case 'INCREMENT_BREAK':
            return state+payload > 15 ? state: state+payload;
        case 'DECREMENT_BREAK':
            return state-payload < 1 ? state: state-payload;
        default:
            return state;
    }
}
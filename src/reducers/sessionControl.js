export const timerSetting = (state = false, action) => {
    switch(action.type){
        case 'TIMER_ON':
            return true;
        case 'TIMER_OFF':
            return false;
        default:
            return state;
    };
}

export const sessionSetting = (state = null, action) => {
    switch(action.type){
        case 'SESSION_ON':
            return {...action.payload};
        case 'SESSION_OFF':
            return null;
        default:
            return state;
    }
}
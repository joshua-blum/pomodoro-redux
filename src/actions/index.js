export const incrementBreak = (amount) => {
    return {
        type: 'INCREMENT_BREAK',
        payload: amount
    }
}

export const decrementBreak = (amount) => {
    return {
        type: 'DECREMENT_BREAK',
        payload: amount
    }
}

export const incrementFocus = (amount) => {
    return {
        type: 'INCREMENT_FOCUS',
        payload: amount
    }
}

export const decrementFocus = (amount) => {
    return {
        type: 'DECREMENT_FOCUS',
        payload: amount
    }
}

export const timerOn = () => {
    return {
        type: 'TIMER_ON',
    }
}

export const timerOff = () => {
    return  {
        type: 'TIMER_OFF',
    }
}

export const sessionOn = (session) => {
    return {
        type: 'SESSION_ON',
        payload: {...session}
    }
}

export const sessionOff = () => {
    return {
        type: 'SESSION_OFF',
    }
}
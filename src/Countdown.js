import React from 'react';
import {minutesToDuration, secondsToDuration} from './utils/duration';
import {useSelector} from 'react-redux';

export default function Countdown(){
    const session = useSelector(state => state.session);
    const focusDuration = useSelector(state => state.focusDuration);
    const breakDuration = useSelector(state => state.breakDuration)
    return (
        !session ? null : (
            <div className="row mb-2">
                
              <div className="col">
                {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
                <h2 data-testid="session-title">
                  {session.label} for {minutesToDuration(session.label === "On Break" ? breakDuration : focusDuration)} minutes
                </h2>
                {/* TODO: Update message below correctly format the time remaining in the current session */}
                <p className="lead" data-testid="session-sub-title">
                  {secondsToDuration(session.timeRemaining)} remaining
                </p>
              </div>
            </div>
            )
    )
}
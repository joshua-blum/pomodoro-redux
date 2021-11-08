import React from 'react';
import useInterval from './utils/useInterval.js';
import Countdown from './Countdown';
import {
    sessionOn, 
    sessionOff, 
    incrementBreak, 
    incrementFocus, 
    decrementBreak, 
    decrementFocus, 
    timerOn, 
    timerOff
} from './actions';
import ProgressBar from './ProgressBar';
import {useSelector, useDispatch} from 'react-redux';
import './index.css';

export default function Pomodoro(){
    const dispatch = useDispatch();
    const focusDuration = useSelector(state => state.focusDuration);
    const breakDuration = useSelector(state => state.breakDuration);
    const session = useSelector(state => state.session);
    const timer = useSelector(state => state.timer);

    function nextTick(){
        const timeRemaining = Math.max(0, session.timeRemaining-1);
        return {
            ...session,
            timeRemaining: timeRemaining
        }
    }

    function nextSession(){
        return {
            label: session.label === 'Focusing' ? 'On Break': 'Focusing',
            timeRemaining: session.label === 'Focusing' ? breakDuration * 60 : focusDuration * 60
        }
    }

    useInterval(() => {
        if(!session) return null;
        if (session.timeRemaining === 0) {
            new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
            return dispatch(sessionOn(nextSession()));
        }
        return dispatch(sessionOn(nextTick()));
        },
        timer ? 1000 : null
    );

    function playPause() {
        //if the timer is currently not on
        if(!timer) {
            //and if the session is null... set session to default state 
            if(!session) dispatch(sessionOn({
                label: "Focusing",
                timeRemaining: focusDuration * 60,
            }));
            //switch timer on
            return dispatch(timerOn())
        };
        //if timer is already on, switch it off
        return dispatch(timerOff());
      }

    function stopSession(){
        if(timer) dispatch(timerOff());
        dispatch(sessionOff());
    }

      return (
        <div className="pomodoro">
          <div className="row">
            <div className="col">
              <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" data-testid="duration-focus">
                  Focus Duration: {focusDuration}
                </span>
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="decrease-focus"
                    onClick={() => dispatch(decrementFocus(5))}
                    disabled={session}
                  >
                    <span className="oi oi-minus" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="increase-focus"
                    onClick={() => dispatch(incrementFocus(5))}
                    disabled={session}
                  >
                    <span className="oi oi-plus" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="float-right">
                <div className="input-group input-group-lg mb-2">
                  <span className="input-group-text" data-testid="duration-break">
                    Break Duration: {breakDuration}
                  </span>
                  <div className="input-group-append">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-testid="decrease-break"
                      onClick={() => dispatch(decrementBreak(1))}
                      disabled={session}
                    >
                      <span className="oi oi-minus" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-testid="increase-break"
                      onClick={() => dispatch(incrementBreak(1))}
                      disabled={session}
                    >
                      <span className="oi oi-plus" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div
                className="btn-group btn-group-lg mb-2"
                role="group"
                aria-label="Timer controls"
              >
                <button
                  type="button"
                  className="btn btn-primary"
                  data-testid="play-pause"
                  title="Start or pause timer"
                  onClick={playPause}
                >
                  <span
                    className={!timer ? "oi oi-media-play": "oi oi-media-pause"}
                  />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="stop"
                  title="Stop the session"
                  onClick={stopSession}
                  disabled={!session}
                >
                  <span className="oi oi-media-stop" />
                </button>
              </div>
            </div>
          </div>
          <div>
              <Countdown />
              <ProgressBar />
          </div>
        </div>
      );
}
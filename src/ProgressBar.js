  import React from 'react';
  import {useSelector} from 'react-redux';

 export default function ProgressBar(){
    const session = useSelector(state => state.session);
    const timer = useSelector(state => state.timer);
    const focusDuration = useSelector(state => state.focusDuration);
    const breakDuration = useSelector(state => state.breakDuration);

    //dynamically update progress bar referring to duration of sesssion
    function displayBar(){
        if(!session || !timer) return null;
        if(session.label === "Focusing") return 100 - (((session.timeRemaining)/(focusDuration*60)) * 100);
        else return 100 - (((session.timeRemaining)/(breakDuration*60)) * 100);
    }

    return (
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={displayBar()} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${displayBar()}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
    )
 }

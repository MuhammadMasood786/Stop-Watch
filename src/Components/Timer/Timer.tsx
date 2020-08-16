import React from 'react';
import './Timer.css'

function Timer(props: any) {
  return (
    <div className="TimerStyle">
      <h1 className="hour">{(props.time.hour > 0 ? props.time.hour : "00")}</h1>
      <div className='row'>
        <span className="min">{(props.time.min > 0 ? props.time.min : "00")}</span>
        <span className="dot">:</span>
        <span className="sec">{(props.time.sec > 0 ? props.time.sec : "00")}</span>
      </div>
    </div>
  );
}

export default Timer;

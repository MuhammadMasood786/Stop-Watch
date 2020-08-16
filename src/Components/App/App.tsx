import React, { useState } from 'react';
import './App.css';
import Timer from '../Timer/Timer';
import Btn from '../BtnTimer/Btns';

function App() {

  const [time, setTime] = useState({ sec: 0, min: 0, hour: 0 })
  const [timeInterval, setTimeInterval] = useState({})
  const [status, setStatus] = useState(0)

  let updateHour = time.hour;
  let updateMin = time.min;
  let updateSec = time.sec

  const runTimer = () => {
    updateSec++
    if (updateSec >= 60) {
      updateMin++
      updateSec = 0
    }
    else if (updateMin >= 60) {
      updateHour++
      updateMin = 0
    }
    updateSec++
    return setTime({ sec: updateSec, min: updateMin, hour: updateHour })
  }

  const start = () => {
    if (status !== 1) {
      runTimer()
      setStatus(1)
      setTimeInterval(setInterval(runTimer, 100))
    }
  }

  const pause = () => {
    clearInterval(Number(timeInterval))
    setStatus(2)
  }

  const reset = () => {
    clearInterval(Number(timeInterval));
    setStatus(0);
    setTime({ sec: 0, min: 0, hour: 0 })
  }
  return (
    <div className="App">
      <h1> <i className="fa fa-clock-o" aria-hidden="true"></i></h1>
      <h1>Stop Watch </h1>
      <Timer time={time} />
      <Btn start={start} pause={pause} reset={reset} />
    </div>
  );
}

export default App;




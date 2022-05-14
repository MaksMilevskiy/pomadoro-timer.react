import React, { useState, useEffect } from 'react'

export default function Timer(props) {
  const [timeLeft, setTimeLeft] = useState(props.time);
  const [isTimerActive, setTimerActive] = useState(false);

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, 0);
  const seconds = (timeLeft - minutes * 60).toString().padStart(2, 0);
  
  const handleStart = () => {setTimerActive(true)}
  const handleStop = () => {setTimerActive(false)}
  const handleReset = () => {
    setTimerActive(false);
    setTimeLeft(2 * 60)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      isTimerActive &&
       setTimeLeft((timeLeft) => timeLeft >= 1 ? timeLeft - 1 : 0)
    }, 1000);

    if (timeLeft === 0) {
      setTimerActive(false)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isTimerActive, timeLeft])

  return (
    <div className="app">
      <div className="timer">
        {minutes}:{seconds}
      </div>
      <div className="buttons">
        {isTimerActive 
        ? <button onClick={handleStop}>Stop</button>
        : <button onClick={handleStart}>Start</button>
        }
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}
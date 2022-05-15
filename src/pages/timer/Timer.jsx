import React, { useState, useEffect } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isTimerActive, setTimerActive] = useState(false);
  const [lastPeriod, setLastPeriod] = useState(0);
  const [message, setMessage] = useState("");

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, 0);
  const seconds = (timeLeft - minutes * 60)
    .toString()
    .padStart(2, 0);

  const handleStart = () => {
    setTimerActive(true);
  };
  const handleStop = () => {
    setTimerActive(false);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      isTimerActive &&
        setTimeLeft((timeLeft) => (timeLeft > 0 ? timeLeft - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      if ([0, 2, 4, 6].includes(lastPeriod)) {
        setTimeLeft(25 * 60);
        setMessage("Час працювати");
        setLastPeriod(lastPeriod + 1);
      } else if ([1, 3, 5].includes(lastPeriod)) {
        setTimeLeft(5 * 60);
        setMessage("Час трохи відпочити");
        setLastPeriod(lastPeriod + 1);
      } else if (lastPeriod === 7) {
        setTimeLeft(30 * 60);
        setMessage("Зробіть велику паузу");
        setLastPeriod(lastPeriod + 1);
      } else {
        setTimerActive(false);
        setLastPeriod(0);
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [isTimerActive, timeLeft, lastPeriod]);

  return (
    <div className="app">
      <div className="timer">
        {minutes}:{seconds}
      </div>
      <div className="message">{message}</div>
      <div className="buttons">
        {isTimerActive ? (
            <button onClick={handleStop}>Пауза</button>
        ) : (
          <button onClick={handleStart}>Старт</button>
        )}
        <button onClick={() => setTimeLeft(1)}>Reset</button>
      </div>
    </div>
  );
}

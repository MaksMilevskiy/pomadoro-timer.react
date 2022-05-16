import React, { useState, useEffect } from "react";
import classes from "./Timer.module.css";
import { Link } from "react-router-dom";

export default function Timer() {
  const [isTimerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isReset, setReset] = useState(false);
  const [period, setPeriod] = useState(0);
  const [message, setMessage] = useState("Час працювати");

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, 0);
  const seconds = (timeLeft - minutes * 60).toString().padStart(2, 0);

  const handleStart = () => {
    setTimerActive(true);
  };
  
  useEffect(() => {
    document.body.style = "background-image: none";

    return () => {
      document.body.style = 'background-image: url(images/"tomatoes_bg.jpg")'
    }
  })

  useEffect(() => {
    // reseter effect
    if (isReset) {
      // reset other values
      setReset(false);
      setPeriod(0);
      setTimeLeft(0);
      setTimerActive(false);
    }
  }, [isReset]);

  useEffect(() => {
    // timer effect
    if (isTimerActive) {
      if (timeLeft > 0) {
        // schedule next timer tick
        const timer = setTimeout(() => {
          setTimeLeft((timeLeft) => timeLeft - 1);
        }, 1000);

        return () => clearTimeout(timer);
      } else {
        // go to the next period
        setPeriod((period) => period + 1);
      }
    }
  }, [timeLeft, isTimerActive]);

  useEffect(() => {
    // period update effect
    if ([1, 3, 5, 7].includes(period)) {
      setTimeLeft(25 * 60);
      setMessage("Час працювати");
    } else if ([2, 4, 6].includes(period)) {
      setTimeLeft(5 * 60);
      setMessage("Час відпочити");
    } else if (period === 8) {
      setTimeLeft(30 * 60);
      setMessage("Велика пауза");
    } else {
      setPeriod(1);
    }
  }, [period]);

  return (
    <div className={classes.app}>
      <div className={classes.wrapper}>
        <div className={classes.timer_wrapper}>
          <div className={classes.message}>{message}</div>
          <div className={classes.timer}>
            {minutes}:{seconds}
          </div>
        </div>
        <div className="buttons">
          {isTimerActive ? (
            <button onClick={() => setReset(true)}>Скинути таймер</button>
          ) : (
            <button onClick={handleStart}>Старт</button>
          )}
        </div>
      </div>
      <Link to="/" className={classes.to_main}>
        На головну
      </Link>
    </div>
  );
}

import React from 'react'
import { Link } from 'react-router-dom';

export default function Main({setTimer}) {
  return (
    <div>
        <div className="main">
            <h1>Вітаю в Pomadoro Timer</h1>
            <form onSubmit={(e) => setTimer(e)}>
              <input type="number"/>
              <input type="submit" value="Підтвердити"/>
            </form>
            
            <Link to="/timer">Перейти до таймера</Link>
        </div>
    </div>
  )
}

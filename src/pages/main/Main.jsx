import React from 'react'
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div>
        <div className="main">
            <h1>Вітаю в Pomadoro Timer</h1>           
            <Link to="/timer">Перейти до таймера</Link>
        </div>
    </div>
  )
}

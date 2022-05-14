import React from 'react'
import { Routes, Route } from "react-router-dom";
import Main from './pages/main/Main'
import Timer from './pages/timer/Timer'
import './App.css'
import { useState } from 'react';

export default function App() {
  const [initialState, setInitialState] = useState(0)
  const setTimer = (event) => {
    setInitialState(event.target.children[0].value);
    event.preventDefault();
    event.target.children[0].value = '';
  }
  return (
    <Routes>
      <Route path='/' element={<Main setTimer={setTimer}/>}></Route>
      <Route path='timer' element={<Timer time={initialState}/>}></Route>
    </Routes>
  )
}



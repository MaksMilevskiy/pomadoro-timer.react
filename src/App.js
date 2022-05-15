import React from 'react'
import { Routes, Route } from "react-router-dom";
import Timer from './pages/timer/Timer'
import Main from './pages/main/Main';
import './App.css'

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='timer' element={<Timer />}></Route>
    </Routes>
  )
}




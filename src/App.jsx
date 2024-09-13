import React from 'react';
import Home from './components/Home.jsx';
import { Route, Routes } from 'react-router-dom';
export default function App(){
  return (
    <div className="h-screen w-full flex">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
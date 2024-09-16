import React from 'react';
import Details from './components/Details.jsx'
import Home from './components/Home.jsx';
import { Link, Route, Routes } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

export default function App(){
  return (
    <div className="h-screen w-full flex">
      <Link to="/" className="p-2 text-2xl bg-red-400 text-zinc-100 absolute right-0 rounded-full"><FaHome /></Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item-details/:id" element={<Details />} />
      </Routes>
    </div>
  )
}
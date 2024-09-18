import React from 'react';
import Details from './components/Details.jsx'
import Home from './components/Home.jsx';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import Create from './components/Create.jsx';

export default function App(){
  const {search, pathname} = useLocation();
  
  return (
    <div className="h-screen w-full flex">
      {
        (pathname != '/' || search.length > 0) && (<Link to="/" className="p-1 text-lg rounded bg-blue-600 text-zinc-100 absolute right-1 top-1"><FaHome /></Link>)
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/item-details/:id" element={<Details />} />
      </Routes>
    </div>
  )
}
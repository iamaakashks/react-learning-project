import React from 'react';
import Cards from './Cards';
import Navbar from './Navbar.jsx';
export default function Home(){
    return (
        <>
            <Navbar />
            <div className="w-[82%] h-[100%] px-8 py-4 flex gap-4 flex-wrap">
                <Cards />
            </div>
        </>
    )
}
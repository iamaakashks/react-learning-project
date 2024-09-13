import React from 'react';
import { Link } from 'react-router-dom';

export default function Cards(){
    return (
        <Link to="/item-details/" className="w-64 h-72 bg-white rounded-lg">
            <div className="h-[70%] w-[100%] rounded-t-lg border-b-[1px]">
                <img className='select-none hover:scale-125 hover:transition-transform hover:duration-300 h-full m-auto p-8' src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
            </div>
            <div className="h-[30%] rounded-b-lg flex flex-col p-2 gap-2">
                <div className="flex flex-col">
                <h1 className="text-sm tracking-tight font-medium">Mens Casual Premium Slim Fit T-Shirts</h1>
                <h4 className="flex content-end text-xs opacity-60 font-semibold">Men's Clothing</h4>
                </div>
                <div className="flex gap-2 text-sm"><h3 className="font-semibold">$ 399.99</h3><span className="select-none line-through opacity-40 italic">499.99</span></div>
            </div>
        </Link>
    )
}
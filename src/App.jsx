import React from 'react';
export default function App(){
  return (
    <div className="h-screen w-full flex">
      <nav className="flex flex-col items-center pt-2 w-[18%] h-[100%] bg-zinc-900 text-zinc-100">
        <a href="/create"><button type="button" className="px-3.5 py-2 bg-green-200 rounded-lg font-bold text-zinc-700 text-sm">Add New Product</button></a>
        <hr className="w-[80%] border-zinc-600 my-2"/>
        <h1 className="font-bold w-[80%] mb-2">Category Filter</h1>
        <ul className="font-semibold w-[80%] flex flex-col gap-2">
          <li className="p-1.5 "><span className="inline-block mr-2 w-[8px] h-[8px] bg-blue-400 rounded-full"></span>Category 1</li>
          <li className="p-1.5 "><span className="inline-block mr-2 w-[8px] h-[8px] bg-purple-400 rounded-full"></span>Category 2</li>
          <li className="p-1.5 "><span className="inline-block mr-2 w-[8px] h-[8px] bg-red-400 rounded-full"></span>Category 3</li>
          <li className="p-1.5 "><span className="inline-block mr-2 w-[8px] h-[8px] bg-teal-400 rounded-full"></span>Category 4</li>
        </ul>
      </nav>
      <div className="bg-red-300 w-[82%] h-[100%] px-8 py-4 flex gap-4 flex-wrap">
        <div className="w-64 h-72 bg-white rounded-lg">
          <div className="h-[70%] w-[100%] rounded-t-lg border-b-[1px]">
            <img className='hover:scale-125 hover:transition-transform hover:duration-300 h-full m-auto p-8' src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
          </div>
          <div className="h-[30%] rounded-b-lg flex flex-col p-2 gap-2">
            <div className="flex flex-col">
              <h1 className="text-sm tracking-tight font-medium">Mens Casual Premium Slim Fit T-Shirts</h1>
              <h4 className="flex content-end text-xs opacity-60 font-semibold">Men's Clothing</h4>
            </div>
            <div className="flex gap-2 text-sm"><h3 className="font-semibold">$ 399.99</h3><span className="line-through opacity-40 italic">499.99</span></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
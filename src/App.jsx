import React from 'react';
export default function App(){
  return (
    <div className="h-screen w-full bg-zinc-400">
      <nav className="flex flex-col items-center pt-2 w-[18vw] h-[100%] bg-zinc-300">
        <a href="/create"><button type="button" className="px-3.5 py-2 bg-green-200 rounded-lg font-bold text-zinc-700 text-sm">Add New Product</button></a>
        <hr className="w-[80%] border-zinc-400 my-2"/>
        <h1 className="font-bold w-[80%] mb-2">Category Filter</h1>
        <ul className="font-semibold w-[80%] flex flex-col gap-2">
          <li className="p-1.5 "><span className="inline-block mr-2 w-[8px] h-[8px] bg-blue-400 rounded-full"></span>Category 1</li>
          <li className="p-1.5 "><span className="inline-block mr-2 w-[8px] h-[8px] bg-purple-400 rounded-full"></span>Category 2</li>
          <li className="p-1.5 "><span className="inline-block mr-2 w-[8px] h-[8px] bg-red-400 rounded-full"></span>Category 3</li>
          <li className="p-1.5 "><span className="inline-block mr-2 w-[8px] h-[8px] bg-teal-400 rounded-full"></span>Category 4</li>
        </ul>
      </nav>
    </div>
  )
}
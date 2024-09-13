import React from 'react';

export default function Details(){
    return (
        <div className="w-[50%] h-[60%] border-[1px] border-zinc-400 m-auto rounded-lg">
            <div className="w-[50%] rounded-l-lg border-r-[1px] border-gray-700 h-full">
                <img className='h-full m-auto p-10 hover:scale-110 hover:transition-transform hover:duration-500' src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
            </div>
        </div>
    )
}
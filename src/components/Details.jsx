import React from 'react';
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";


export default function Details(){
    return (
        <div className="w-[50%] h-[50%] border-[1px] border-zinc-400 m-auto rounded-lg flex items-center">
            <div className="w-[40%] rounded-l-lg h-full">
                <img className='h-full m-auto p-8 hover:scale-110 hover:transition-transform hover:duration-500' src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
            </div>
            <div className="bg-neutral-400 h-[80%] w-[1px]"></div>
            <div className="h-full w-[60%] rounded-r-lg p-4 tracking-wider flex flex-col justify-center">
                <h1 className="font-semibold text-lg leading-5">Mens Casual Premium Slim Fit T-Shirts</h1>
                <h3 className="font-semibold opacity-30 text-sm">Men's Clothing</h3>
                <div className="w-full mt-4 flex items-center justify-between">
                    <div className="flex gap-2"><h1 className="font-bold">$89.99</h1><span className="line-through italic opacity-50">99.99</span></div>
                    <div className="flex items-center gap-2">
                        <div className="flex">
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarHalfOutline />
                        </div>
                        <h4 className="tracking-tight text-sm">(259)</h4>
                    </div>
                </div>
                <p className="leading-tight my-4 border-l-[1px] border-gray-300 p-1 tracking-tight text-xs text-justify">Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.</p>
                <div className="flex gap-4">
                    <button type='button' className="px-4 py-1.5 rounded-md bg-green-600 text-sm text-white">Add to Cart</button>
                    <button type='button' className="px-4 py-1.5 rounded-md bg-red-600 text-sm text-white">Remove</button>
                </div>
            </div>
        </div>
    )
}
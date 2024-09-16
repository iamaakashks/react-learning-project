import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

export default function Navbar(){

    const colorPoint = ()=>{
        return `rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, 0.9)`;
    }

    const [products] = useContext(ProductContext);
    let distinctCategory = products && products.reduce((acc, cv)=>[...acc, cv.category], [])
    distinctCategory = [...new Set(distinctCategory)];
    return (
        <nav className="flex flex-col items-center pt-2 w-[18%] h-[100%] bg-zinc-900 fixed text-zinc-100">
            <a href="/create"><button type="button" className="px-3.5 py-2 bg-green-200 rounded-lg font-bold text-zinc-700 text-sm">Add New Product</button></a>
            <hr className="w-[80%] border-zinc-600 my-2"/>
            <h1 className="font-bold w-[80%] mb-2">Category Filter</h1>
            <div className="font-semibold w-[80%] flex flex-col gap-2">

                {
                    distinctCategory.map((category, index)=>{
                        return <Link to={`/?category=${category}`} key={index} className="p-1.5 hover:underline"><span style={{backgroundColor: colorPoint()}} className={`inline-block mr-2 w-[8px] h-[8px] rounded-full`}></span>{category}</Link>
                    })
                }

            </div>
        </nav>
    )
}